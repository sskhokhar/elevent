'use strict';

angular.module('EleventApp')
    .controller('SignupCtrl', function($state, Collaborator, $scope, $rootScope, $stateParams, AuthService, Upload, Attachment, Eventmanager, Event) {
        $scope.x = true;
        $rootScope.title = "Signup";
        var token = $stateParams.token;
        $rootScope.topBar = false;
        $scope.user = {
            firstname: "",
            lastname: "",
            companyName: "",
            email: "",
            password: "",
            profilePicture: "",
            collaboratingIds: []
        }
        $scope.isSigning = false;
        var _profilePicture = "";
        var temp = [];
        $scope.signup = function() {
            $scope.isSigning = true;
            if (token === undefined) {
                console.log("token not found");
                AuthService.register($scope.user).then(function(succ) {
                    var uId = succ.id;
                    Attachment.createContainer({ name: uId }, function(ctr) {
                        console.log("cotainer created");
                        Upload.upload({
                            url: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + "/" + 'upload',
                            data: { file: $scope.file }
                        }).then(function(resp) {
                            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                            _profilePicture = $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + '/download/' + resp.config.data.file.name;
                            AuthService.login($scope.user.email, $scope.user.password);

                        }, function(resp) {
                            console.log('Error status: ' + resp.status);
                        }, function(evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                        });
                    }, function(err) {
                        console.log("Error registering user", err);
                        $scope.isSigning = false;
                    });
                }, function(err) {
                    $scope.isSigning = false;
                    if (err.data.error.message.includes('Email already exists')) {
                        $scope.err = `Email already exists. Please login to continue.`;
                    }
                    //console.log(err);
                });
            } else {
                console.log("token found");
                Collaborator.findById({ id: token }, function(collab) {

                    AuthService.register($scope.user).then(function(succ) {
                        var uId = succ.id;
                        var _eventId = collab.eId;
                        Attachment.createContainer({ name: uId }, function(ctr) {
                            Upload.upload({
                                url: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + "/" + 'upload',
                                data: { file: $scope.file }
                            }).then(function(resp) {
                                temp.push(_eventId);
                                AuthService.login($scope.user.email, $scope.user.password);
                                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                            }, function(resp) {
                                console.log('Error status: ' + resp.status);
                            }, function(evt) {
                                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                            });
                        }, function(err) {
                            console.log(err);
                            $scope.isSigning = false;
                        })
                        Event.findById({ id: collab.eId }, function(event) {
                            var _temp = event.collaboratorIds;
                            _temp.push(succ.id);
                            Event.prototype$patchAttributes({ id: event.id }, { collaboratorIds: _temp }, function(updatedEvent) {
                                console.log(updatedEvent);
                            }, function(err) {
                                console.log(err);
                            })
                        }, function(err) {
                            console.log(err);
                        });
                        Collaborator.prototype$patchAttributes({ id: collab.id }, { uId: succ.id }, function(updated) {
                            console.log(updated);
                        }, function(err) {
                            console.log(err);
                        });

                    }, function(err) {
                        $scope.isSigning = false;
                        if (err.data.error.message.includes('Email already exists')) {
                            $scope.err = `Email already exists. Please login to continue.`;
                        }
                        //console.log(err);
                    });

                }, function(err) {
                    token = undefined;
                    $scope.isSigning = false;
                    $scope.signup();
                });
            }
        }
        $scope.$on('logged-in', function(args) {
            Eventmanager.prototype$patchAttributes({ id: $rootScope.currentUser.id }, { profilePicture: _profilePicture, collaboratingIds: temp }, function(updated) {
                console.log("user updated");
                $rootScope.currentUser.profilePicture = updated.profilePicture;
                $scope.user = {
                    firstname: "",
                    lastname: "",
                    companyName: "",
                    email: "",
                    password: "",
                    profilePicture: "",
                    collaboratingIds: []
                }
                $scope.file = null;
                setTimeout(function() {
                    $state.go('index');
                }, 500);
            }, function(err) {
                console.log("Error updating user", err);
                $scope.isSigning = false;
            })

            console.log("logged in");



        });
        $scope.go = function(state) {
            $state.go(state);
        }
    });