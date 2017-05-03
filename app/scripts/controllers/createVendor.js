'use strict';

angular.module('EleventApp')
    .controller('CreateVendorCtrl', function($state, $scope, $rootScope, $stateParams, Event, Attachment, Upload, Vendor) {
        var _eventId = $stateParams.id;

        $scope.x = true;
        $rootScope.title = "Add Vendor";
        $scope.vendor = {
            "companyName": "",
            "name_1": "",
            "name_2": "",
            "address": "",
            "phone": "",
            "email": "",
            "website": "",
            "image": "",
            "pointOfContact": {
                "name": "",
                "phone": "",
                "email": "",
                "website": ""
            },
            notes: ""
        }
        $scope.file = null;
        $scope.addVendor = function() {
            $scope.vendor.eventId = _eventId;
            Event.vendor.create({ id: _eventId }, $scope.vendor, function(success) {
                Attachment.createContainer({ name: success.id }, function(ctr) {
                    Upload.upload({
                        url: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + "/" + 'upload',
                        data: { file: $scope.file }
                    }).then(function(resp) {
                        Vendor.prototype$patchAttributes({ id: success.id }, { image: $rootScope.apiBaseUrl + '/Attachments/' + ctr.name + '/download/' + resp.config.data.file.name }, function(updated) {
                            $scope.vendor = {
                                "companyName": "",
                                "name_1": "",
                                "name_2": "",
                                "address": "",
                                "phone": "",
                                "email": "",
                                "website": "",
                                "image": "",
                                "pointOfContact": {
                                    "name": "",
                                    "phone": "",
                                    "email": "",
                                    "website": ""
                                },
                                notes: ""
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
        $scope.go = function(state) {

            $state.go(state);
        }
    });