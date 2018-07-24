var myapp = angular.module('stock', ['ui.router']);

myapp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('asdf', {
            url: "/asdf",
            templateUrl: 'views/index.html',
            controller: 'home'
        })
        .state('home', {
            url: "/",
            templateUrl: 'views/demo.html',
            controller: 'demo'
        })
        .state('stock', {
            url: "/stock/:snm",
            templateUrl: 'views/index.html',
            controller: 'stock'
        })
    $urlRouterProvider.otherwise('/');

}]);