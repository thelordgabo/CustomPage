(function () {
    'use strict';
    var app = angular.module('customPage');
    app.directive('specDirective', specDirective);

    function specDirective(jsonDataService) {
        var directive = {
            restrict: "E",
            templateUrl: 'specializations/specializations.template.html',
            controller: specDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function specDirectiveController() {
            var vm = this;
            vm.specializations = {};

            var data = jsonDataService.getData('js/json/textJson.json');
            if (data) {
                data.then(function (data) {
                    vm.specializations = data;
                });
            }
        }
    }
})();