'use strict';

angular.module('EleventApp')
    .controller('CollaborateCtrl', function($state, ngToast, $stateParams, $scope, $rootScope, Collaborator, Event) {
        $('.e-nav').show();
        $scope.x = true;
        $rootScope.title = "Invite to Collaborate";
        $rootScope.bg = "./images/card-bg1.jpg";
        var _eventId = $stateParams.id;

        $scope.vendors = "";
        $scope.isInvite = false;
        $scope.go = function(state, _id) {
            $state.go(state, { id: _id });
        }
        $scope.collaborator = {
            name: '',
            email: "",
            role: ''
        }

        $scope.invite = function() {
            $scope.isInvite = true;
            Collaborator.find({ filter: { where: { email: $scope.collaborator.email } } }, function(succ) {
                if (succ.length == 0) {
                    Collaborator.create({ role: $scope.collaborator.role, eId: _eventId, email: $scope.collaborator.email }, function(success) {
                        console.log(success);
                        Event.prototype$invite({ id: _eventId }, { toName: $scope.collaborator.name, token: success.id, fromName: $rootScope.currentUser.name }, function(invited) {
                            console.log(invited);
                            $scope.collaborator = {
                                name: '',
                                email: "",
                                role: ''
                            }
                            ngToast.create({
                                content: 'Invitation sent successfuly',
                                timeout: 2000,
                                onDismiss: function() {
                                    $scope.go('dashboard', _eventId);
                                }
                            });
                            $scope.isInvite = false;
                        })

                    }, function(err) {
                        ngToast.create({
                            class: 'warning',
                            content: 'Invitation not sent',
                            timeout: 2000,
                        });
                        $scope.isInvite = false;
                    });
                } else {
                    var count = 0;
                    succ.forEach(function(obj) {
                        if (obj.eId == _eventId) {
                            count++;
                        }
                    }, this);
                    if (count > 0) {
                        $scope.err = "Person with this email has already been invited to this event.";
                        $scope.isInvite = false;
                    } else {

                    }
                }
            }, function(err) {
                Collaborator.create({ role: $scope.collaborator.role, eId: _eventId, email: $scope.collaborator.email }, function(success) {
                    console.log(success);
                    Event.prototype$invite({ id: _eventId }, { toName: $scope.collaborator.name, token: success.id, fromName: $rootScope.currentUser.name }, function(invited) {
                        console.log(invited);
                        $scope.collaborator = {
                            name: '',
                            email: "",
                            role: ''
                        }
                        ngToast.create({
                            content: 'Invitation sent successfuly',
                            timeout: 2000,
                            onDismiss: function() {
                                $scope.go('dashboard', _eventId);
                            }
                        });
                        $scope.isInvite = false;
                    })

                }, function(err) {
                    ngToast.create({
                        class: 'warning',
                        content: 'Invitation not sent',
                        timeout: 2000,
                    });
                    $scope.isInvite = false;
                });
            })

        }


    });