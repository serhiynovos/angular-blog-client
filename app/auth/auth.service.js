'use strict';
import angular from 'angular';

let authServiceFactory = function($http, API_URL) {
  return {
    registration: (email, password) => {
      return $http.post(API_URL + '/auth/registration', {email, password});
    },

    login: (email, password) => {
      return $http.post(API_URL + '/auth/login', {email, password});
    }
  }
};

authServiceFactory.$inject = ['$http', 'API_URL'];

export default angular.module('auth.service', [])
  .factory('authService', authServiceFactory);