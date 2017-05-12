'use strict';

angular.module('EleventApp')
    .controller('VendorCtrl', function($state, $scope, $rootScope, $http) {
        $('.e-nav').show();
        $scope.x = true;
        $rootScope.title = "Vendor Contact";
        // $rootScope.bg = "./images/card-bg1.jpg";
        $scope.vendors = "";


        $scope.go = function(state) {
            $state.go(state);
        }

        $http.get("scripts/dashboard.json").then(function(response) {
            $scope.vendors = response.data.vendors;
        });

    });