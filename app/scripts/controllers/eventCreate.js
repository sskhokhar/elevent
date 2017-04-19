'use strict';

angular.module('EleventApp')
    .controller('EventCreateCtrl', ['$state', '$scope', '$rootScope', 'Upload', function($state, $scope, $rootScope, Upload) {
        $scope.x = true;
        $rootScope.title = "Create Event";

        $scope.go = function(state) {
            $state.go(state);
        }

        // upload later on form submit or something similar
        $scope.submit = function() {
            if ($scope.form.file.$valid && $scope.file) {
                $scope.upload($scope.file);
            }
        };

        //upload on file select or drop
        $scope.upload = function(file) {
            Upload.upload({
                url: 'upload/url',
                data: { file: file, 'username': $scope.username }
            }).then(function(resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function(resp) {
                console.log('Error status: ' + resp.status);
            }, function(evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
        // for multiple files:
        $scope.uploadFiles = function(files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    // Upload.upload({..., data: {file: files[i]}, ...})...;
                }
                // or send them all together for HTML5 browsers:
                // Upload.upload({..., data: {file: files}, ...})...;
            }
        }
    }]);
