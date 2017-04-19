'use strict';

angular.module('EleventApp')
  .controller('LoginCtrl', function ($state,$scope,$rootScope) {
    $scope.x = true;
    $rootScope.title = "Login";

    $scope.go = function(state){
    	
    	$state.go(state);
    }
  });
