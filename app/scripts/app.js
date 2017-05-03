'use strict';


angular.module('EleventApp', [
    'ngCookies',
    'ngSanitize',
    'ui.router',
    '720kb.datepicker',
    'ngFileUpload',
    'angular-svg-round-progressbar',
    'ngResource',
    'LoopBack',
    'ADM-dateTimePicker',
    'ui.multiselect',
    'ngFileUpload'
])

.config(function($stateProvider, $urlRouterProvider, LoopBackResourceProvider, $httpProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server

    LoopBackResourceProvider.setUrlBase('http://52.15.198.192:3000/api');

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            authenticate: true
        })
        .state('editTimeline', {
            url: '/editTimeline/:id',
            templateUrl: 'views/editTimeline.html',
            controller: 'EdittimelineCtrl'
        })
        .state('dashboard', {
            url: '/dashboard/:id',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl',
            authenticate: true
        })

    .state('timeline', {
        url: '/timeline/:id',
        templateUrl: 'views/timeline.html',
        controller: 'TimelineCtrl',
        authenticate: true
    })

    .state('eventCreate', {
        url: '/eventCreate',
        templateUrl: 'views/eventCreate.html',
        controller: 'EventCreateCtrl',
        authenticate: true
    })

    .state('timelineCreate', {
        url: '/timelineCreate/:id',
        templateUrl: 'views/timelineCreate.html',
        controller: 'CreateTimelineCtrl',
        authenticate: true
    })

    .state('createVendor', {
        url: '/createVendor/:id',
        templateUrl: 'views/createVendor.html',
        controller: 'CreateVendorCtrl',
        authenticate: true
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
        controller: 'VendorCtrl',
        authenticate: true
    })

    .state('collaborate', {
        url: '/collaborate',
        templateUrl: 'views/collaborate.html',
        controller: 'CollaborateCtrl',
        authenticate: true
    })

}).run(['$rootScope', '$state', 'LoopBackAuth', 'AuthService', function($rootScope, $state, LoopBackAuth, AuthService) {
    $rootScope.isEmpty = function(obj) {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) return false;
        }
        return true;
    };
    $rootScope.apiBaseUrl = 'http://52.15.198.192:3000/api';
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        // redirect to login page if not logged in
        if (toState.authenticate && !LoopBackAuth.accessTokenId) {
            event.preventDefault(); //prevent current page from loading

            // Maintain returnTo state in $rootScope that is used
            // by authService.login to redirect to after successful login.
            // http://www.jonahnisenson.com/angular-js-ui-router-redirect-after-login-to-requested-url/
            $rootScope.returnTo = {
                state: toState,
                params: toParams
            };

            $state.go('login');
        }
    });

    // Get data from localstorage after pagerefresh
    // and load user data into rootscope.
    if (LoopBackAuth.accessTokenId && !$rootScope.currentUser) {
        AuthService.refresh(LoopBackAuth.accessTokenId);
    }
}]);