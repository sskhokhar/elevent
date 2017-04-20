'use strict';

angular.module('EleventApp')
    .controller('MainCtrl', function($state, $scope, $rootScope, $http) {

        $scope.Title = "Elevent";
        $rootScope.title = "Elevent";
        $rootScope.bg = "../images/plane.jpg";
        $scope.menu = false;

        $scope.xb = false;

        $scope.myData;
        $rootScope.User = {};
        $rootScope.User.id;
        $rootScope.User.name;
        $rootScope.User.img;
        $rootScope.User.email;

        $scope.show = function(i) {
            $("#btn_" + i).show();

        };

        $scope.hide = function(i) {
            $("#btn_" + i).hide();
        };

        $scope.go = function(state) {
            $state.go(state);
        }

        $http.get("scripts/user.json").then(function(response) {

            $rootScope.User.id = response.data.user[0].id;
            $rootScope.User.name = response.data.user[0].name;
            $rootScope.User.img = response.data.user[0].img;
            $rootScope.User.email = response.data.user[0].email;
        });

        $http.get("scripts/event.json").then(function(response) {
            $scope.myData = response.data.events;
        });


    });
