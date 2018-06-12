(function() {
    'use strict';

    /*
     ================================================================================================
     Inventory Look Up pop up
     ================================================================================================
     */
    angular
        .module('app.demo')
        .directive('addEmployeeModal', addEmpModal);

    /* @ngInject */
    function addEmpModal() {
        return {
            templateUrl: 'resources/app/demo/employee/modals/addNewEmployeeModal.html',
            restrict: 'E',
            scope: {
                modalId: '@',
                returnObj: '=',
				callbackAddData: '&' 	
            },
            controller: AddEmpModalCtrl,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    /* ngInject */
    function AddEmpModalCtrl($scope, $http, $rootScope, modalPopUpService) {
         var vm = this;
         vm.init = init();
		 vm.addDetails = addDetails;
         function init() { 
         
         }
		 
		  // function to pass entered data to parent
    	 function addDetails() {
			 vm.addEmp ={
						id: "",
						name: vm.name,
						username: vm.username,
						email: vm.email
				 
			 };
			 
			 vm.callbackAddData({returnObj:vm.addEmp});			  
		 }
       
	}

})();
