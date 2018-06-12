(function() {
    'use strict';

    /**
     * modalPopUpService
     *
     * The modalService service provides a central service for manipulating modals.
     */
    angular
        .module('app.demo')
        .factory('modalPopUpService', modalPopUpService);

    /**
     * Internal function that returns the modalService factory function.
     * @returns {Object} the angular factory function
     * @ngInject
     */
    function modalPopUpService() {
        var service = {
            open: openModal,
            close: closeModal
        };

        return service;

        /////////////////////

        function openModal(rootScope, selector, isLightBox, level) {
            var modalContainerEl,
                modalEl = angular.element(document.querySelector(selector));

            // find modal container
            var el = modalEl.parent();
            while (el[0] !== undefined && el[0].localName !== 'html') {
                if (el.hasClass('modal-container') || el.hasClass('lightbox-container')) {
                    modalContainerEl = el;
                    break;
                }
                el = el.parent();
            }
            if (!modalContainerEl) {
                return;
            }

            if (isLightBox) {
                if (!modalEl.hasClass('launch-lightbox')) {
                    modalEl.addClass('launch-lightbox');
                    modalContainerEl.addClass('launch-lightbox');
                } else {
                    modalEl.removeClass('launch-lightbox');
                    if (level === 1) {
                        modalContainerEl.removeClass('launch-lightbox');
                    }
                }
            } else {
                // open modal container and modal element
                if (!modalEl.hasClass('launch-modal')) {
                    modalEl.addClass('launch-modal');
                    modalContainerEl.addClass('launch-modal');
                } else {
                    modalEl.removeClass('launch-modal');
                    if (level === 1) {
                        modalContainerEl.removeClass('launch-modal');
                    }
                }
            }

            rootScope.$broadcast('openModal', modalEl[0].id);
            var focusEl = angular.element(document.querySelector('#' + modalEl[0].id + ' .modal-focus'));
            if (focusEl && focusEl.focus) {
                focusEl.focus();
            }
        }

        function closeModal(rootScope, element, closingType) {
            var el = element,
                container,
                closed = false,
                others = false,
                closedEl, children, i, len;

            // find modal element to close
            while (el[0] !== undefined && el[0].localName !== 'html') {
                if (!closed && (el.hasClass('launch-lightbox') || el.hasClass('launch-modal'))) {
                    el.removeClass('launch-modal');
                    el.removeClass('launch-lightbox');
                    closed = true;
                    closedEl = el;
                }
                if (el.hasClass('modal-container') || el.hasClass('lightbox-container')) {
                    container = el;
                    break;
                }
                el = el.parent();
            }

            if (closed && container) {
                // determine if other modal elements in the modal container are open
                children = container.find('div');
                for (i = 0, len = children.length; i < len; i++) {
                    var child = angular.element(children[i]);
                    if (child.hasClass('right-modal') && child.hasClass('launch-modal')) {
                        others = true;
                        break;
                    }
                    if (child.hasClass('right-lightbox') && child.hasClass('launch-lightbox')) {
                        others = true;
                        break;
                    }
                    if (child.hasClass('confirmation-lightbox') && child.hasClass('launch-lightbox')) {
                        others = true;
                        break;
                    }
                }

                // if no other open modals, close the parent modal container
                if (!others) {
                    container.removeClass('launch-modal');
                    container.removeClass('launch-lightbox');
                }
            }

            rootScope.$broadcast('closeModal', {id: closedEl[0].id, type: closingType});
        }
    }

})();
