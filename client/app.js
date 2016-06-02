'use strict';

window.app = angular.module('utilityViewer', ['ui.router', 'esri.map','ngCookies', 'ui.bootstrap' ]);


app.filter('underscoreless', function () {
  return function (input) {
        if(input) return input.replace(/_/g, ' ');
  };
});

app.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('map',{
            url:'/',
            templateUrl: './client/views/map.html',
            controller: 'MapCtrl'
        })

        // .state('help',{
        //     url:'/help/:section',
        //     templateUrl: './client/views/help.html',
        //     controller: 'HelpCtrl'
        // });

    $urlRouterProvider.otherwise('/');

});