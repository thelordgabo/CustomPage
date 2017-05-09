var app = angular.module('customPage');

app.service('textService', function($http, $q) {

  var text = {};

  var deferred = $q.defer();
  $http.get('js/json/textJson.json').then(function(data) {
      deferred.resolve(data);
  });
  
  this.getText = function(){
      return deferred.promise;
  };

});
