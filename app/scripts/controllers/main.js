'use strict';

angular.module('EleventApp')
    .controller('MainCtrl', function($state, $scope, $rootScope, $http, AuthService, Event) {

        $scope.Title = "Elevent";
        $rootScope.title = "Elevent";
        $rootScope.bg = "../images/plane.jpg";
        $scope.menu = false;

        $scope.myData;


        $scope.$state = $state;
        $state.current.name;


        $scope.showMenu = function() {
            if ($state.current.name != "index") {
                $scope.menu = !$scope.menu;
            }
        }


        $scope.show = function(i) {
            $("#btn_" + i).show();

        };

        $scope.hide = function(i) {
            $("#btn_" + i).hide();
        };

        $scope.go = function(state, _id) {
            $state.go(state, { id: _id });
        }
        $scope.logout = function() {
                AuthService.logout();
            }
            /*$http.get("scripts/event.json").then(function(response) {
                $scope.myData = response.data.events;
            });*/
            //$scope.myData = [];
            /*   
             */
        $rootScope.$watch(function() {
            return $rootScope.currentUser;
        }, function(n, o) {
            // console.log("new value ", n);
            // console.log("old value ", o);
            if (n != null) {
                Event.find({ "where": { "eventManagerId": $rootScope.currentUser.id } }, function(success) {
                    $scope.myData = success;
                    $scope.myData.forEach(function(obj) {
                        obj.progress = 0;
                        Event.tasks({ id: obj.id }, function(success) {
                            var total = success.length;
                            var done = 0;
                            if (total > 0) {
                                success.forEach(function(task) {
                                    if (task.isDone == true) {
                                        done++;
                                    }
                                }, this);
                                obj.progress = Math.floor((done / total) * 100);
                            }

                            //console.log(obj.progress);
                        }, function(err) {
                            console.log(err);
                        })
                    }, this);


                }, function(err) {
                    console.log(err);
                })
            }
        })

    });