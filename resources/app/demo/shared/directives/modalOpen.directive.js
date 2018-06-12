(function() {
    'use strict';

    /*
    ================================================================================================
     On click open a modal
    ==================================================================================================
    */
    angular
        .module('app.demo')
        .directive('pnDeModalOpen', modalOpen);

    /* @ngInject */
    function modalOpen($rootScope, modalPopUpService) {
        return {
            restrict: 'A',
            scope: {
                pnDeModalOpen: '='
            },
            link: function(scope, element) {
                var config = scope.pnDeModalOpen;
                if (!config || !config.selector) {
                    return;
                }

                element.bind('click', function() {
                    if (config.preventLoad) {
                        return;
                    }

                    modalPopUpService.open($rootScope, config.selector, config.isLightbox, config.level || 1);
                });
            }
        };
    }

})();
