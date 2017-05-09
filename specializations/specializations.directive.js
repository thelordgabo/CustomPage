(function () {
    'use strict';
    var app = angular.module('customPage');
    app.directive('specDirective', specDirective);

    function specDirective(jsonDataService) {
        var directive = {
            restrict: "E",
            templateUrl: 'specializations/specializations.template.html',
            controller: specDirectiveController,
            controllerAs: 'me',
            bindToController: true
        };

        return directive;

        function specDirectiveController() {
            var me = this;
            me.specializations = {};

            var data = jsonDataService.getData('specializations/specializationsJson.json');
            if (data) {
                data.then(function (data) {
                    me.specializations = data;
                });
            }
        }
    }
})();