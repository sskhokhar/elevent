'use strict';

angular.module('EleventApp')
  .controller('CreateTimelineCtrl', function ($state,$scope,$rootScope) {
   $rootScope.title = "Create Timeline";

   $scope.go = function(state){
    	$state.go(state);
    }
  });
