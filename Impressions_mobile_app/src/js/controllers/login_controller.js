angular.module('DoxNotes')
.controller('LoginCtrl',function($scope,$location,$rootScope,EmployeeDetails){
	$scope.login = function(){
		//console.log($scope);	
		var ename = this.emp_name;
		//var epwd =  this.emp_password;
		/*if(ename == 'Admin' && epwd == 'admin')
		{*/
		//	alert('hi');
		//	console.log($location);
		
		$rootScope.name = ename;
		//alert(ename);
		for(var i = 0 ; i < $scope.employees.length; i++)
		{
			/*alert($scope.employees[i].firstName);
			alert($scope.employees[i].eid);*/
			if($scope.employees[i].firstName == ename)
			{
				$rootScope.emp_id = $scope.employees[i].eid;
				$rootScope.logged_in = true ;
				break;
			}
			else
			{
				$rootScope.logged_in = false ;
			}
		}
		
		//alert($rootScope.logged_in);
		//alert($rootScope.emp_id);
		if($rootScope.logged_in)
			$location.path('/home');
		else
			alert("Please Select Valid Name from List");
		//}
		/*else
		{*/
			//alert("Login Unsuccessful");
		//}
}

//$scope.employees = EmployeeDetails.getEmployees($scope);
EmployeeDetails.async().then(function(response){
	$scope.employees = response.employees;
});
//console.log($scope.employees);	
//console.log(this);
/*[
{
"eid": 1,
"firstName": "santosh"
},
{
"eid": 2,
"firstName": "pankaj "
},
{
"eid": 3,
"firstName": "Viraj Kamath"
},
{
"eid": 4,
"firstName": "Viraj Kamath"
},
{
"eid": 5,
"firstName": "Santosh Manda"
}
];*/

});