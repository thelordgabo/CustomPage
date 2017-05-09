(function () {
  'use strict';
  var app = angular.module('customPage');

  app.directive('textDirective', textDirective);

  function textDirective(textService) {
    return {
      restrict: "E",
      templateUrl: 'js/templates/textDirective.html',
      controller: function ($scope, $timeout) {
        setTimeout(function () {
          jQuery('.post').addClass("hidden-div").viewportChecker({
            classToAdd: 'visible-div animated fadeIn'
          });
        }, 10);
        $scope.textList = {};
        var promise = textService.getText();
        promise.then(function (data) {
          $scope.textList = data.data;
        });
      }
    }
  }
})();