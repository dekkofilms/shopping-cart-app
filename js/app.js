'use strict';

var app = angular.module('shoppingCartApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'teaStore',
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      // controller: '',
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html',
      // controller: '',
    })
});
