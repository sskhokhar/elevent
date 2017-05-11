'use strict';

angular.module('EleventApp')
    .controller('LoginCtrl', function($state, $scope, $rootScope, AuthService) {

        $scope.x = true;
        $rootScope.bg = "../images/plane.jpg";
        $rootScope.title = "Login";
        $scope.user = {
            email: '',
            password: ''
        }

        $scope.$on('login-failed', function() {
            $scope.isLogin = false;
            $scope.err = 'Invalid username or password.'
        })
        $scope.isLogin = false;
        $scope.login = function() {
            $scope.isLogin = true;
            AuthService.login($scope.user.email, $scope.user.password);
        }
        $scope.$on('logged-in', function(args) {
            $scope.isLogin = true;

            $scope.go("index");
            $rootScope.login = false;
        })
        $scope.go = function(state) {

            $state.go(state);
        }
    });