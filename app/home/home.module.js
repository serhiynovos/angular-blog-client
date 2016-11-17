'use strict';

import angular from 'angular';
import homeTpl from './home.html';
import homeCtrl from './home.controller';

let module = angular.module('app.home', []);

module
    .controller('HomeCtrl', homeCtrl);

module
    .config(['$stateProvider',
        ($stateProvider) => {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: homeTpl,
                    controller: 'HomeCtrl',
                    controllerAt: 'vm'
                });
        }
    ]);

export default module;