'use strict';

angular.module('EleventApp')
    .controller('EdittimelineCtrl', function($state, $scope, $rootScope, $stateParams, Task, Event) {
        $rootScope.title = "Edit Timeline";
        var _taskId = $stateParams.id;
        console.log(_taskId);
        $scope.task = {
            title: "",
            date: "",
            description: "",
            location: "",
            vendorIds: [],
            eventId: ""
        }
        Task.findById({ id: _taskId }, function(succ) {
            var temp = succ.date.slice(0, succ.date.indexOf("T"));
            var date = temp.split("-").join("/");
            var time = succ.date.slice(succ.date.indexOf("T") + 1, succ.date.indexOf("Z"));
            time = time.split(":");
            var dateTime = date + " " + time[0] + ":" + time[1];
            //console.log(dateTime);
            succ.date = dateTime;
            $scope.task = succ;
            Event.vendor({ id: succ.eventId }, function(success) {
                    $scope.vendors = success;
                    success.forEach(function(obj) {
                        console.log(obj);
                        if (succ.vendorIds.indexOf(obj.id) >= 0) {
                            $scope.selectedVendors.push(obj);
                        }
                    }, this);
                    console.log($scope.selectedVendors);
                }, function(err) {
                    console.log(err);
                })
                //console.log($scope.task);
                //console.log(succ);
        }, function(err) {
            console.log(err);
        });
        $scope.vendors = [];

        $scope.selectedVendors = [];

        $scope.updateTask = function() {
            $scope.task.vendorIds = [];
            $scope.selectedVendors.forEach(function(vendor) {
                $scope.task.vendorIds.push(vendor.id);
            }, this);
            Task.prototype$patchAttributes({ id: _taskId }, $scope.task, function(success) {
                console.log(success);
            }, function(err) {
                console.log(err);
            })
        }

    });