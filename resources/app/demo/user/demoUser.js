(function() {
    'use strict';

    angular
        .module('app.demo')
        .controller('UserController', UserCtrl);
    /* ngInject */
    function UserCtrl($scope, $http, blockUI, demoService) {

         $scope.init = init();
		 $scope.getDetails = getDetails;
         function init() {  
			$scope.showUserDetails = null;
            $scope.userList = 
					[
					  {
						"id": 1,
						"name": "Leanne Graham",
						"username": "Bret",
						"email": "Sincere@april.biz",
						"address": {
						  "street": "Kulas Light",
						  "suite": "Apt. 556",
						  "city": "Gwenborough",
						  "zipcode": "92998-3874"
						}
					  },
					  {
						"id": 2,
						"name": "Ervin Howell",
						"username": "Antonette",
						"email": "Shanna@melissa.tv",
						"address": {
						  "street": "Victor Plains",
						  "suite": "Suite 879",
						  "city": "Wisokyburgh",
						  "zipcode": "90566-7771"
						}
					  },
					  {
						"id": 3,
						"name": "Clementine Bauch",
						"username": "Samantha",
						"email": "Nathan@yesenia.net",
						"address": {
						  "street": "Douglas Extension",
						  "suite": "Suite 847",
						  "city": "McKenziehaven",
						  "zipcode": "59590-4157"
						}
					  },
					  {
						"id": 4,
						"name": "Patricia Lebsack",
						"username": "Karianne",
						"email": "Julianne.OConner@kory.org",
						"address": {
						  "street": "Hoeger Mall",
						  "suite": "Apt. 692",
						  "city": "South Elvis",
						  "zipcode": "53919-4257"
						}
					  }
				]
                             
			}
			
			function getDetails(id){
				blockUI.start("get detail...");
				demoService.getUserDetails(id).then(function (data) {
					$scope.userDetails = data;  
					$scope.showUserDetails = true;
					blockUI.stop();
				});
			}
       
    }
})();
