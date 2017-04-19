'use strict';

angular.module('EleventApp')
  .controller('MainCtrl', function ($state, $scope, $rootScope, $http) {

  	$scope.Title = "Elevent";
  	$rootScope.title = "Elevent";
    $rootScope.name = "Muhammad Usama";
    $rootScope.img = "images/guy-6.jpg";
    $rootScope.bg = "../images/plane.jpg";
    $scope.menu = false;

    $scope.xb = false;

    $scope.myData;

    $scope.show = function(i){
      $("#btn_"+i).show();

    }; 

    $scope.hide = function(i){
      $("#btn_"+i).hide();
    }; 

    $scope.go = function(state){
    	$state.go(state);
    }

      $http.get("scripts/event.json").then(function(response) {
        $scope.myData = response.data.records;
    });
    

  });


