'use strict';

angular.module('EleventApp')
  .controller('DashboardCtrl', function ($state,$scope,$rootScope, $http) {
    $scope.x = true;
    $rootScope.title = "Event Dashboard";
    $rootScope.bg = "./images/card-bg1.jpg";
    $scope.timeline;
    $scope.colaborator;

    $scope.go = function(state){

    	$state.go(state);
    }

    $http.get("scripts/dashboard.json").then(function(response) {
        $scope.timeline = response.data.timeline;
        $scope.colaborator = response.data.colaborator;
    });
  });
