//Main file
var app = angular.module('superheroApp', ['addSuperheroCtrl', 'galleryCtrl','detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addSuperhero', {
            templateUrl: 'partials/addSuperhero.html',
            controller: 'addSuperheroController'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'AuthController'
        })
        //Redirect to addSuperhero in all the other cases.
        .otherwise({redirectTo:'/login'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AynkfxksOQNSa83fviAQKz');
});
