// https://www.quandl.com/api/v3/datasets/NSE/TCS.json?api_key=73zaj7Hpz24Nsa-xMSbr

myapp.factory('quandl', ["$http", function($http) {

    var runUserRequest = function(urlnm) {
      var apikey="73zaj7Hpz24Nsa-xMSbr"
      return $http({
        method: 'GET',
        url: urlnm+"api_key="+apikey
      });
    };

    return {
      request: function(urlnm) {
        return runUserRequest(urlnm);
      }
    };
}]);
