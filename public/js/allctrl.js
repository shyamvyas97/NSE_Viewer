myapp.controller('home',["$scope","quandl", function($scope,quandl) {
    quandl.request("https://www.quandl.com/api/v3/datasets/NSE/IBULISL/data.json?")
        .then(function(resp) { 
            $scope.data = resp.data.dataset_data; 
        });
}]);
myapp.controller('demo',["$scope","$http", function($scope,$http) {
    $http.get("js/data.json")
        .then(function(response) {
            $scope.data =response.data;
   });
}]);
myapp.controller('stock',["$scope","quandl","$stateParams", function($scope,quandl,$stateParams) {
    quandl.request("https://www.quandl.com/api/v3/datasets/NSE/"+$stateParams.snm+"/data.json?")
        .then(function(resp) { 
            $scope.data = resp.data; 
        });
}]);