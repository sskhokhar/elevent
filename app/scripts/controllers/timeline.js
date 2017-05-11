'use strict';

angular.module('EleventApp')
    .controller('TimelineCtrl', function($scope, $rootScope, $http, $stateParams, Task, Event, $state) {
        var _eventId = $stateParams.id;
        $rootScope.title = "Event Timeline";
        $scope.myData;
        $rootScope.bg = "../images/card-bg2.jpg";
        $scope.delCard = function(i) {
            Event.tasks.destroyById({ id: _eventId }, { fk: i }, function(success) {
                    console.log(success);
                    $("#card_" + i).hide();
                }, function(err) {
                    console.log(err);
                })
                // $("#btn_" + i).hide();
                //alert("del_"+i);

        };

        /*$http.get("scripts/dashboard.json").then(function(response) {
            $scope.myData = response.data.timeline;
        });*/
        Task.find({ filter: { where: { eventId: _eventId } } }, function(success) {
            //console.log(success);
            var tasks = parseDateTime(success);
            $scope.myData = tasks;


        }, function(err) {
            console.log(err);
        });

        $scope.editTask = function(_id) {
            $state.go('editTimeline', { id: _id });
        }

        $scope.toggleDone = function(_id) {
            var done = false;
            $scope.myData.forEach(function(task) {
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