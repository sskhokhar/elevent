'use strict';

angular.module('EleventApp')
    .controller('MainCtrl', function($state, Attachment, $timeout, $scope, $rootScope, $http, AuthService, Event, Eventmanager, ngToast, $stateParams) {
        console.log("state", $stateParams);
        $rootScope.eventId = $stateParams.id;
        $scope.Title = "Elevent";
        $rootScope.title = "Elevent";
        $rootScope.bg = "../images/plane.jpg";

        $scope.myData = [];

        if ($state.current.url == "/main") {
            $('.e-nav').show();
        }
        $scope.delCard = function(i) {
            $('.modal-backdrop').remove();
            //$('#event_card_' + i).remove();
            $scope.myData.splice($scope.myData.indexOf(i), 1);
            Event.tasks.destroyAll({ id: i.id }, function(success) {

            }, function(err) {

            });
            Event.vendor.destroyAll({ id: i.id }, function(success) {
                Eventmanager.events.destroyById({ id: $rootScope.currentUser.id }, { fk: i.id }, function(success) {

                    ngToast.create({
                        content: 'Event deleted successfuly',
                        timeout: 1000
                    });
                }, function(err) {

                })
            }, function(err) {

            })
        }

        $scope.showSpinner = true;
        $scope.showMenu = function() {
            if ($state.current.name != "login" && $state.current.name != "signup" && $state.current.name != "index") {
                $rootScope.menu = !$rootScope.menu;
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
            console.log(_id);
            $state.go(state, { id: _id });
        }
        $scope.logout = function() {
            AuthService.logout();
        }
        $rootScope.$watch(function() {
            return $rootScope.currentUser;
        }, function(n, o) {
            console.log("new" + n, "OLD" + o);
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
                        } else {
                            $scope.noEvent = "";
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
                    });
                Eventmanager.prototype$getCollaboratings({ id: $rootScope.currentUser.id }, function(success) {
                    success.forEach(function(obj) {
                        obj.isCollab = true;
                        $scope.myData.push(obj);
                    }, this);
                });
            }
        })

    });