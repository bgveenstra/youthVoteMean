/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ngResource',
                         'ngRoute',
<<<<<<< HEAD
                         'myApp.services',
                         'myApp.controllers'  
=======
                         'ui.bootstrap',
                         'myApp.controllers',
                         'googlechart'
>>>>>>> pieChart
                         ])

  .constant('HOST', 'http://localhost:1337') //DEV
  // .constant('HOST', 'http://yourdomain.herokuapp.com') //PRODUCTION

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: "HomeCtrl"
      })
      // .when('/login', {
      //   templateUrl: 'templates/login'
      // , controller: 'LoginCtrl'
      // })
      // .when('/sign-up', {
      //   templateUrl: 'templates/sign-up'
      // , controller: 'SignUpCtrl'
      // })
      // .when('/profile', {
      //   templateUrl: 'templates/profile.html'
      // , controller: 'ProfileCtrl'
      // })
      .when('/election', {
        templateUrl: 'templates/election.html'
      })
      .when('/whyVote', {
        templateUrl: 'templates/why_vote.html'
      })
      .when('/results', {
        templateUrl: 'templates/results.html',
        controller: 'ResultsCtrl'
      })
      .when('/results', {
        templateUrl: 'templates/results.html'
      , controller: 'ResultsCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
