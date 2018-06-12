(function() {

angular.module('app.demo')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('user',{
           url:'/user', 
           //template: '<gfu-admin></gfu-admin>'
		   templateUrl: 'resources/app/demo/user/demoUser.html',
           controller: 'UserController'
        })
        .state('employee',{
            url:'/employee', 
           template: '<demo-employee></demo-employee>'
        });
        
    });

})(); 