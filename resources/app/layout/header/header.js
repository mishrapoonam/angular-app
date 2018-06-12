(function() {
    'use strict';

    angular
        .module('app')
        .controller('HeaderCtrl', HeaderCtrl);
    /* ngInject */
    function HeaderCtrl($scope, $location, $rootScope) {
         var vm = this;
         vm.init = init();
         vm.isActive = isActive;
         function init() {  
            vm.userName = "Poonam Mishra";
         }
         
        function isActive(viewLocation) {
         var active = (viewLocation === $location.path());
         return active;
        };
    }

})();
