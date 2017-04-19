'use strict';

angular.module('EleventApp')
  .controller('TimelineCtrl', function ($scope,$rootScope, $http) {
   $rootScope.title = "Event Timeline";
   $scope.myData;

   $http.get("scripts/dashboard.json").then(function(response) {
        $scope.myData = response.data.timeline;
    });
  });
