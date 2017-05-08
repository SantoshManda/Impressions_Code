angular.module('DoxNotes')
.controller('LoginCtrl',function($scope,$location,$rootScope){
	
	$scope.login = function(){
		//console.log($scope);	
		var ename = this.emp_name;
		var epwd =  this.emp_password;
		if(ename == 'Admin' && epwd == 'admin')
		{
		//	alert('hi');
		//	console.log($location);
		$rootScope.logged_in = true ;
		$rootScope.name = this.ename;
		alert($rootScope.logged_in);
			$location.path('/home');
		}
		else
		{
			alert("Login Unsuccessful");
		}
}
});