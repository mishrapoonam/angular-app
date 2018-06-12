angular.module('app.demo').directive('demoEditEmployee', editEmployee);

function editEmployee() {
	return {
		templateUrl : 'resources/app/demo/employee/demoEditEmployee.html',
		restrict : 'E',
		 scope: {
            	returnObj: '='
            },
		controllerAs : 'vm',
		controller : EmployeeEditCtrl,
		bindToController: true
	};
	
}

function EmployeeEditCtrl($scope) {
	var vm = this;
	vm.init = init();		
		
		function init(){
			
			
		}


}