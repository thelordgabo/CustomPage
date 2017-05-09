(function () {
  'use strict';
  var app = angular.module('customPage');

  app.directive('textDirective', textDirective);

  function textDirective(jsonDataService) {
    var directive = {
      restrict: "E",
      templateUrl: 'js/templates/textDirective.html',
      controller: testDirectiveController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    function testDirectiveController($timeout) {
      var vm = this;
      setTimeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      }, 10);
      vm.textList = {};
      var promise = jsonDataService.getData('js/json/textJson.json');
      promise.then(function (data) {
        vm.textList = data;
      });
    }
  }
})();