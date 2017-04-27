'use strict';

angular.module('EleventApp')
  .controller('CollaborateCtrl', function ($state,$scope,$rootScope, $http) {
    $scope.x = true;
    $rootScope.title = "Invite to Collaborate";
    // $rootScope.bg = "./images/card-bg1.jpg";
    $scope.vendors = "";

    $scope.go = function(state){
    	$state.go(state);
    }

    $http.get("scripts/dashboard.json").then(function(response) {
        $scope.vendors = response.data.vendors;
    });

  });
