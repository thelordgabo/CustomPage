(function () {
    'use strict';
    var app = angular.module('customPage');
    app.directive('specDirective', specDirective);

    function specDirective(specService) {
        var directive = {
            restrict: "E",
            templateUrl: 'specializations/specializations.template.html',
            controller: specDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function specDirectiveController () {
            var vm = this;
            vm.specializations = {};
            var promise = specService.getSpecs();
            promise.then(function(data) {
                vm.specializations = data.data;
            });
        }
    }
})();