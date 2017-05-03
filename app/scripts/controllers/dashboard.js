'use strict';

angular.module('EleventApp')
    .controller('DashboardCtrl', function($state, $scope, $rootScope, $http, $stateParams, Task, Event) {
        var _eventId = $stateParams.id;

        $scope.eventId = _eventId;
        $scope.x = true;
        $rootScope.title = "Event Dashboard";
        $rootScope.bg = "./images/card-bg1.jpg";
        $scope.timeline;
        $scope.colaborator;
        $scope.vendors;

        $scope.go = function(state, _id) {

            $state.go(state, { id: _id });
        }

        /* $http.get("scripts/dashboard.json").then(function(response) {
             $scope.timeline = response.data.timeline;
             $scope.colaborator = response.data.colaborators;
             $scope.vendors = response.data.vendors;
         }); */
        Event.tasks({ id: _eventId }, function(success) {
            console.log(success);
            var tasks = parseDateTime(success);
            $scope.timeline = tasks;
        }, function(err) {
            console.log(err);
        });

        Event.vendor({ id: _eventId }, function(success) {
            $scope.vendors = success;
            //console.log(success);
        }, function(err) {
            console.log(err);
        })
        $scope.toggleDone = function(_id) {
            var done = false;
            $scope.timeline.forEach(function(task) {
                if (task.id == _id) {
                    done = task.isDone;
                }
            }, this);
            Task.prototype$patchAttributes({ id: _id }, { isDone: done }, function(success) {
                console.log(success);
            }, function(err) {
                console.log(err);
            });
        }

        function parseDateTime(arr) {

            arr.forEach(function(i) {
                /*  console.log("DATE", i.date);
                  var hours = new Date(i.date).getHours();
                  console.log(hours);
                  var minutes = new Date(i.date).getMinutes();
                  var suffix = "";
                  if (hours >= 12) {
                      suffix = "PM";
                  } else {
                      suffix = "AM";
                  }
                  if (hours > 12) {
                      hours = hours - 12;
                      i.date = hours + ":" + minutes + " " + suffix;
                  } */
                var tmp = i.date.substring(i.date.indexOf("T") + 1, i.date.indexOf("Z")).split(":");
                var hour = tmp[0] > 12 ? tmp[0] - 12 : tmp[0];
                var min = tmp[1];
                var time = tmp[0] > 12 ? "PM" : "AM";
                var dateStr = hour + ":" + min + " " + time;
                i.date = dateStr;
            }, this);

            return arr;
        }
    });