myapp.controller('home', ["$scope", "$http", function ($scope, $http) {
    $http.get("js/data.json")
        .then(function (response) {
            $scope.data = response.data;
        })
        .catch(function (err) {
            console.log(err);
        });
}]);

// myapp.controller('');

myapp.controller('stock', ["$scope", "quandl", "$stateParams","$q", "DTOptionsBuilder","DTColumnBuilder", function ($scope, quandl, $stateParams,$q, DTOptionsBuilder,DTColumnBuilder) {
    $scope.dtOptions=DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        quandl.request("https://www.quandl.com/api/v3/datasets/NSE/" + $stateParams.snm + "/data.json?")
        .then(function (resp) {
            $scope.data = resp.data.dataset_data.data;
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
    // $scope.date=[];
    // $scope.open=[];
    // $scope.high=[];
    // $scope.low=[];
    // $scope.last=[];
    // $scope.close=[];
    // $scope.ttq=[];
    // $scope.tuonover=[];
    // for (var i = 0; i < $scope.data.length; i++) {
    //     $scope.data.push($scope.data[i][0]);
    //     $scope.open.push($scope.data[i][1]);
    //     $scope.high.push($scope.data[i][2]);
    //     $scope.low.push($scope.data[i][3]);
    //     $scope.last.push($scope.data[i][4]);
    //     $scope.close.push($scope.data[i][5]);
    //     $scope.ttq.push($scope.data[i][6]);
    //     $scope.tuonover.push($scope.data[i][7]);
    // }

    // $scope.labels = $scope.data;  
    // $scope.data1=[$scope.open,$scope.high,$scope.low,$scope.last,$scope.close,$scope.ttq,$scope.tuonover];
    // $scope.series = ['Open', 'High','low','last','close','Total Trading quantity','Tuonover'];

}]);


myapp.controller('chart', ["$scope", "quandl", "$stateParams","$q", function ($scope, quandl, $stateParams,$q) {
        var defer = $q.defer();
        quandl.request("https://www.quandl.com/api/v3/datasets/NSE/" + $stateParams.snm + "/data.json?")
        .then(function (resp) {
            $scope.data1 = resp.data.dataset_data.data;
            $scope.date=[];
            $scope.open=[];
            $scope.high=[];
            $scope.low=[];
            $scope.last=[];
            $scope.close=[];
            $scope.ttq=[];
            $scope.tuonover=[];
            // console.log($scope.data1);
            for (var i = $scope.data1.length-1; i>=0; i--) {
                $scope.date.push($scope.data1[i][0]);
                $scope.open.push($scope.data1[i][1]);
                $scope.high.push($scope.data1[i][2]);
                $scope.low.push($scope.data1[i][3]);
                $scope.last.push($scope.data1[i][4]);
                $scope.close.push($scope.data1[i][5]);
                $scope.ttq.push($scope.data1[i][6]);
                $scope.tuonover.push($scope.data1[i][7]);
            }
        
            $scope.labels = $scope.date;  
            $scope.data=$scope.open;
            $scope.series = ['Open', 'High','low','last','close','Total Trading quantity','Tuonover'];

        })
        .catch(function (err) {
            console.log(err);
        });
}]);