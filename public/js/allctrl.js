myapp.controller('home', ["$scope", "$http", function ($scope, $http) {
    $http.get("js/data.json")
        .then(function (response) {
            $scope.data = response.data;
        })
        .catch(function (err) {
            console.log(err);
        });
}]);
myapp.controller('stock', ["$scope", "quandl", "$stateParams","$q", "DTOptionsBuilder","DTColumnBuilder", function ($scope, quandl, $stateParams,$q, DTOptionsBuilder,DTColumnBuilder) {
    $scope.dtOptions=DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        quandl.request("https://www.quandl.com/api/v3/datasets/NSE/" + $stateParams.snm + "/data.json?")
        .then(function (resp) {
            // $scope.data = resp.data;
            defer.resolve(resp.data.dataset_data.data);
        })
        .catch(function (err) {
            console.log(err);
        });
        return defer.promise;
    }).withPaginationType('full_numbers');
    $scope.dtColumns = [
        DTColumnBuilder.newColumn(0).withTitle("date"),
        DTColumnBuilder.newColumn(1).withTitle("open"),
        DTColumnBuilder.newColumn(2).withTitle("High"),
        DTColumnBuilder.newColumn(3).withTitle("Low"),
        DTColumnBuilder.newColumn(4).withTitle("Last"),
        DTColumnBuilder.newColumn(5).withTitle("Close"),
        DTColumnBuilder.newColumn(6).withTitle("Total Trade Quantity"),
        DTColumnBuilder.newColumn(7).withTitle("Turnover (Lacs)")   
    ];
    
}]);