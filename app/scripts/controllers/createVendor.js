'use strict';

angular.module('EleventApp')
  .controller('CreateVendorCtrl', function ($state,$scope,$rootScope) {
    $scope.x = true;
    $rootScope.title = "Add Vendor";

    $scope.go = function(state){
    	
    	$state.go(state);
    }
  });
