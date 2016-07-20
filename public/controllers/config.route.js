(function(){
  'use strict';

  angular
  .module('superheroApp.auth')
  .config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider){
    $stateProvider.state('register', {
      url: '/register',
      templateUrl: 'public/partials/register.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'public/partials/login.html',
      controller: 'AuthController',
      controllerAs: 'vm'
    });
  }
})();
