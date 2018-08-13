var myapp = angular.module('stock', ['ui.router','datatables','datatables.bootstrap']);

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
    $urlRouterProvider.otherwise('/');

}]);