angular.module('app.demo').directive('demoEmployee', employee);

function employee() {
	return {
		templateUrl : 'resources/app/demo/employee/demoEmployee.html',
		restrict : 'E',
		controllerAs : 'vm',
		controller : EmployeeCtrl
	};
}

function EmployeeCtrl($scope,$http, $filter, blockUI, $q, demoService, modalPopUpService) {
		var vm = this;
		vm.init = init();	
		vm.edit = null;	
		vm.employeDetails = [];
		vm.editDetails = editDetails;
		vm.updateEmpDetail = updateEmpDetail;
		function init(){
			
	        // $http({
	            // method: "GET",
//url: 'resources/json/employee.json'
	            // }).success(function(data) {
	            	//vm.employeDetails = data;
	            // }).error(function(data) {
	             
	        // });
		demoService.getEmpList().then(function (data) {
			vm.employeDetails = data;    
			});
			 
		}

		function editDetails(user){
			vm.editEmpoyeObj = user;
			vm.edit = true;
		}
		
		function updateEmpDetail(returnData){
			
			returnData.id =  vm.employeDetails.length +1;
			vm.employeDetails.push(returnData);
			console.log(vm.employeDetails);
			vm.edit = null;
		}
}