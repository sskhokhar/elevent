'use strict';

angular.module('EleventApp')
  .controller('TimelineCtrl', function ($scope,$rootScope, $http) {
   $rootScope.title = "Event Timeline";
   $scope.myData;

   $scope.delCard = function(i) {
            // $("#btn_" + i).hide();
            //alert("del_"+i);
            $("#card_"+i).hide();
        };

   $http.get("scripts/dashboard.json").then(function(response) {
        $scope.myData = response.data.timeline;
    });
  });
