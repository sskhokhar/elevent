'use strict';

angular.module('EleventApp')
    .controller('LoginCtrl', function($state, $scope, $rootScope, AuthService) {
        $scope.x = true;

        $rootScope.title = "Login";
        $scope.user = {
            email: '',
            password: ''
        }
        if ($state.current.name == "login") {
            $rootScope.login = true;
        }
        $scope.login = function() {
            AuthService.login($scope.user.email, $scope.user.password);
        }
        $scope.$on('logged-in', function(args) {
            $scope.go("index");
            $rootScope.login = false;
        })
        $scope.go = function(state) {

            $state.go(state);
        }
    });