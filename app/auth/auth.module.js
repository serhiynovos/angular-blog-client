'use strict';
import './auth.css';

import angular from 'angular';
import authService from './auth.service';
import loginTpl from './login.tpl.html';
import registerTpl from './register.tpl.html';

import registerCtrl from './registration.controller';
import loginCtrl from './login.controller';

let authModule = angular.module('app.auth', [authService.name]);

authModule.controller('RegisterCtrl', registerCtrl);
authModule.controller('LoginCtrl', loginCtrl);

authModule
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('login', {
                url: '/auth/login',
                templateUrl: loginTpl,
                controller: 'LoginCtrl',
                controllerAs: 'vm'
            })
            .state('registration', {
                url: '/auth/registration',
                templateUrl: registerTpl,
                controller: 'RegisterCtrl',
                controllerAs: 'vm'
            });
    }]);

export default authModule;