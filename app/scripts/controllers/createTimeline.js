'use strict';

angular.module('EleventApp')
    .controller('CreateTimelineCtrl', function($state, $scope, $rootScope, $stateParams, Event) {
        $rootScope.title = "Create Timeline";
        var _eventId = $stateParams.id;

        $scope.go = function(state) {
            $state.go(state);
        }

        $scope.task = {
            title: "",
            date: "",
            description: "",
            location: "",
            vendorIds: [],
            eventId: ""
        }
        $scope.vendors = [];
        Event.vendor({ id: _eventId }, function(success) {
            $scope.vendors = success;
            console.log(success);
        }, function(err) {
            console.log(err);
        })
        $scope.selectedVendors = [];
        $scope.task.eventId = _eventId;
        $scope.addTask = function() {
            console.log($scope.task.date);
            $scope.selectedVendors.forEach(function(vendor) {
                $scope.task.vendorIds.push(vendor.id);
            }, this);
            Event.tasks.create({ id: _eventId }, $scope.task, function(succ) {
                console.log(succ);
                $scope.task = {
                    title: "",
                    date: "",
                    description: "",
                    location: "",
                    vendorIds: [],
                    eventId: ""
                }
                $scope.selectedVendors = [];
            }, function(err) {
                console.log(err);
            })

        }
    });