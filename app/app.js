'use strict';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import bootstrap from 'angular-ui-bootstrap';

import homeModule from './home/home.module';
import authModule from './auth/auth.module';

angular.module('app', [uirouter, bootstrap,
        homeModule.name,
        authModule.name
    ])
    .constant('API_URL', 'http://localhost:3300')
    .controller('AppCtrl', [() => {

    }])
    .config(['$stateProvider', '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/home');
        }
    ]);