(function () {
    var app = angular.module('customPage');

    app.service('jsonDataService', jsonDataService);

    function jsonDataService($http, $q) {

        this.getData = function (jsonServicePath) {
            var deferred = $q.defer();
            return $http.get(jsonServicePath).then(function (data) {
                return data.data;
            }, function (error) {
                console.log(error.status , error.statusText);
                return [];
            });
        };
    }
})();