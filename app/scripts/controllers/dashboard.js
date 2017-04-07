'use strict';

angular.module('EleventApp')
  .controller('DashboardCtrl', function ($state,$scope) {
    $scope.x = true;

    $scope.go = function(state){
    	$state.go(state);
    }
  });
