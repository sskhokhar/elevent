'use strict';

angular.module('EleventApp')
    .controller('SignupCtrl', function($state, $scope, $rootScope, AuthService, Upload, Attachment, Eventmanager) {
        $scope.x = true;
        $rootScope.title = "Signup";

        $scope.user = {
            firstname: "",
            lastname: "",
            companyName: "",
            email: "",
            password: "",
            profilePicture: ""
        }

        $scope.signup = function() {
            AuthService.register($scope.user).then(function(succ) {
                console.log("success", succ);
                AuthService.login($scope.user.email, $scope.user.password);

            })
        }
        $scope.$on('logged-in', function(args) {
            console.log("logged In");
            var uId = $rootScope.currentUser.id;
            Attachment.createContainer({ name: uId }, function(ctr) {
                Upload.upload({
                    url: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + "/" + 'upload',
                    data: { file: $scope.file }
                }).then(function(resp) {
                    Eventmanager.prototype$patchAttributes({ id: uId }, { profilePicture: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + '/download/' + resp.config.data.file.name }, function(updated) {
                        $scope.user = {
                            firstname: "",
                            lastname: "",
                            companyName: "",
                            email: "",
                            password: "",
                            profilePicture: ""
                        }
                        $scope.file = null;
                        $state.go('index');
                        $rootScope.login = false;
                        console.log(updated);
                    }, function(err) {
                        console.log(err);
                    })
                    console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                }, function(resp) {
                    console.log('Error status: ' + resp.status);
                }, function(evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                });
            }, function(err) {
                console.log(err);
            })
        })
        $scope.go = function(state) {
            $state.go(state);
        }
    });