'use strict';

angular.module('EleventApp')
  .controller('SignupCtrl', function ($state,$scope,$rootScope) {
    $scope.x = true;
    $rootScope.title = "Signup";

    $scope.go = function(state){
    	
    	$state.go(state);
    }
  });
