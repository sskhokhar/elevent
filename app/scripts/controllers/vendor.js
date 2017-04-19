'use strict';

angular.module('EleventApp')
  .controller('VendorCtrl', function ($state,$scope,$rootScope, $http) {
    $scope.x = true;
    $rootScope.title = "Vendor Contact";
    // $rootScope.bg = "./images/card-bg1.jpg";
    $scope.timeline;
    $scope.colaborator;

    $scope.go = function(state){
    	$state.go(state);
    }

    $http.get("scripts/dashboard.json").then(function(response) {
        $scope.timeline = response.data.timeline;
        $scope.colaborator = response.data.colaborator;
        console.log($scope.myData)
    });
  });
