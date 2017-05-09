(function() {
    'use strict';
    var app = angular.module('customPage');

    app.service('specService', specService);

    function specService ($http, $q) {
        var specializations = {};

        var deferred = $q.defer();
        $http.get('specializations/specJson.json').then(function(data) {
            deferred.resolve(data);
        });

        this.getSpecs = function() {
            return deferred.promise;
        }
    }

})();