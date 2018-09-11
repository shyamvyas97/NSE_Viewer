var myapp = angular.module('stock', ['ui.router', 'chart.js','datatables','datatables.bootstrap']);

myapp.config(['$stateProvider', '$urlRouterProvider','$qProvider', function ($stateProvider, $urlRouterProvider,$qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'views/home.html',
            controller: 'home'
        })
        .state('stock', {
            url: "/stock/:snm",
            templateUrl: 'views/stock.html',
            controller: 'stock'
        })
        .state('chart', {
            url: "/chart/:snm",
            templateUrl: 'views/chart.html',
            controller: 'chart'
        })
    $urlRouterProvider.otherwise('/');

}]);