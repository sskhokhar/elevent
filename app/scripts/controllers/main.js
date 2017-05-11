'use strict';

angular.module('EleventApp')
    .controller('MainCtrl', function($state, $scope, $rootScope, $http, AuthService, Event) {

        $scope.Title = "Elevent";
        $rootScope.title = "Elevent";
        $rootScope.bg = "../images/plane.jpg";
        $scope.menu = false;
        $scope.myData = [];

        if ($state.current.url == "/main") {
            $('.e-nav').show();
        }

        $scope.$state = $state;
        $state.current.name;
        $scope.showSpinner = true;
        $scope.showMenu = function() {
            if ($state.current.name != "index") {
                $scope.menu = !$scope.menu;
            }
        }
        $scope.$on('user-logged-out', function() {
            $scope = $scope.$new(true);
        })

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
        $rootScope.$watch(function() {
            return $rootScope.currentUser;
        }, function(n, o) {

            if (n != undefined) {
                console.log($rootScope.currentUser);
                Event.find({
                        filter: { where: { eventManagerId: $rootScope.currentUser.id } }
                    },
                    function(success) {
                        $scope.showSpinner = false;
                        $scope.myData = success;
                        if (success.length < 1) {

                            $scope.noEvent = "No event to display. Please create a new one.";
                        }
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


                    },
                    function(err) {
                        console.log(err);
                    })
            }
        })

    });