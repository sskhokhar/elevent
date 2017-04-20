'use strict';


  angular.module('EleventApp', [
  'ngCookies',
  'ngSanitize',
  'ui.router',
  '720kb.datepicker',
  'ngFileUpload',
  'angular-svg-round-progressbar'
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

      .state('eventCreate', {
        url: '/eventCreate',
      templateUrl: 'views/eventCreate.html',
      controller: 'EventCreateCtrl'
    })

      .state('timelineCreate', {
        url: '/timelineCreate',
      templateUrl: 'views/timelineCreate.html',
      controller: 'CreateTimelineCtrl'
    })

      .state('createVendor', {
        url: '/createVendor',
      templateUrl: 'views/createVendor.html',
      controller: 'CreateVendorCtrl'
    })

      .state('login', {
        url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })

      .state('signup', {
        url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    })

      .state('vendor', {
        url: '/vendor',
      templateUrl: 'views/vendor.html',
      controller: 'VendorCtrl'
    })
  })




