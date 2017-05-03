'use strict';

angular.module('EleventApp')
    .controller('EventCreateCtrl', function($state, $scope, $rootScope, Upload, Attachment, Eventmanager, Event) {
        $scope.x = true;
        $rootScope.title = "Create Event";

        $scope.go = function(state) {
            $state.go(state);
        }

        $scope.event = {
            title: '',
            type: '',
            date: '',
            guests: 0,
            venue: '',
            image: ''
        }
        $scope.file = null;

        $scope.createEvent = function() {
            $scope.event.eventManagerId = $rootScope.currentUser.id
            Eventmanager.events.create({ id: $rootScope.currentUser.id }, $scope.event, function(success) {
                Attachment.createContainer({ name: success.id }, function(ctr) {
                    Upload.upload({
                        url: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + "/" + 'upload',
                        data: { file: $scope.file }
                    }).then(function(resp) {
                        Event.prototype$patchAttributes({ id: success.id }, { image: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + '/download/' + resp.config.data.file.name }, function(updated) {
                            $scope.event = {
                                title: '',
                                type: '',
                                date: '',
                                guests: 0,
                                venue: '',
                                image: ''
                            }
                            $scope.file = null;
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
            }, function(err) {
                console.log(err);
            })
        }


    });