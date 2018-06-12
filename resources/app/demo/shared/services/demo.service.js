(function(){
	'use strict';

	angular
		.module('app.demo')
		.factory('demoService', demoService);

	 /* @ngInject */
	function demoService($http,$q, $log){

        var service = {
            getEmpList: getEmpList,
			getUserDetails : getUserDetails,
           
        };
        var deferred = $q.defer();
		var root = 'http://jsonplaceholder.typicode.com';
		return service;

		// get the emplist
        function getEmpList() {
            var deferred = $q.defer();
            $http.get('resources/json/employee.json')
                .success(function(data) {
                    deferred.resolve(data);
                
                }).error(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });
            return deferred.promise;
        }  
	
		// get user details
		
		  function getUserDetails(id) {
            var deferred = $q.defer();
            $http.get(root+'/posts/'+id)
                .success(function(data) {
                    deferred.resolve(data);
                
                }).error(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });
            return deferred.promise;
        }  
		
    }

})();
