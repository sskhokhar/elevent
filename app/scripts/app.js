'use strict';


  angular.module('EleventApp', [
  'ngCookies',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })

      .state('dashboard', {
        url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })

      .state('timeline', {
        url: '/timeline',
      templateUrl: 'views/timeline.html',
      controller: 'TimelineCtrl'
    })
  })




