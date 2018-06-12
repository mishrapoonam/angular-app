(function() {
    'use strict';

    /*
    ================================================================================================
     On click close a modal
    ==================================================================================================
    */
    angular
        .module('app.demo')
        .directive('pnDeModalClose', modalClose);

    /* @ngInject */
    function modalClose($rootScope, modalPopUpService) {
        return {
            restrict: 'A',
            scope: {
                pnDeModalClose: '='
            },
            link: function(scope, element, attrs) {
                element.bind('click', function() {
                    if (scope.pnDeModalClose) {
                        return;
                    }

                    modalPopUpService.close($rootScope, element, attrs.closingType);
                });
            }
        };
    }

})();
