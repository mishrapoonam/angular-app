(function() {
    'use strict';

    angular
        .module('app.demo')
        .controller('HomeController', HomeCtrl);
    /* ngInject */
    function HomeCtrl($scope, $http) {
         //var vm = this;
         $scope.init = init();
         function init() {  
                                         
			}
       
    }
})();
