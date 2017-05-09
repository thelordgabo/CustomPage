(function () {
    var app = angular.module('aboutUs');

    app.directive('aboutUs', aboutUs);

    function aboutUs(jsonDataService) {
        var directive = {
            restrict: "E",
            templateUrl: 'aboutUs/aboutUs.template.html',
            controller: aboutUsController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function aboutUsController () {
            var vm = this;
            vm.aboutUsInformation = {};

            var data = jsonDataService.getData('aboutUs/aboutUsJson.json');
            if (data) {
                data.then(function(data) {
                    vm.aboutUsInformation = data;
                });
            }
        }
    }
})();