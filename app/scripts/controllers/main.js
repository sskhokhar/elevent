'use strict';

angular.module('EleventApp')
  .controller('MainCtrl', function ($state, $scope) {
    $scope.menu = false;

    $scope.showHide = function(){
    	$scope.menu = !$scope.menu;
    }; 

    $scope.go = function(state){
    	$state.go(state);
    }

  });


