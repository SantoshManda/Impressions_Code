angular.module('DoxNotes.controllers.Main', [])
.controller('MainController', function($scope,$http,$location,EmployeeDetails,ImpressionDetails,$rootScope){
//http://localhost:8089/SpringMVCRestDemo/rest/employees	
  //$http.get('http://10.19.5.82:8089/SpringMVCRestDemo/rest/employees')
	//$http.get('http://10.75.180.110:8080/Impressions/rest/employees')
	//.then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    //$scope.tempData= response.data.employees;
    //console.log(response);
  //}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  //});


	$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.log_out = function($rootScope,$location){
 // $rootScope.logged_in = false ;
  alert("hi");
 // $location.path('#!/');
}
//var date = new Date();
//var tzoffset = (new Date()).getTimezoneOffset() * 60000;
//var date=(new Date(Date.now() - tzoffset)).toISOString().slice(0,-1);
   //	var meeting_date=moment(date.toISOString()).format('DD-MM-YYYY hh:mm:ss a');
   	//console.log(meeting_date);
    $scope.validate = function(){
    	
    	/*if(this.createdBy != null)
   	{
   		if(this.createdBy.firstName == null)
   		{
   		var created_by = this.createdBy;
   		}
   		else
   		{
   		var created_by = this.createdBy.firstName;
   		}
   	}
   	else
   	{
   		alert("Please enter Your Name : ");
   		$scope.isfocus_created_by = true;
   		

   	}*/



   	if(this.selectedEmployee != null)
   	{	
      //console.log($scope.employees);
        for(var i = 0 ; i < $scope.employees.length; i++)
        {
      /*alert($scope.employees[i].firstName);
      alert($scope.employees[i].eid);*/
        if($scope.employees[i].firstName == this.selectedEmployee)
        {
         // alert($scope.employees[i].firstName);
        $rootScope.eid = $scope.employees[i].eid;
        $scope.matched = true;
        break;
        }
        else
        {
        $scope.matched = false;
        }

      }  
     // alert($scope.matched);
      if($scope.matched)
      var employe_name = this.selectedEmployee;
      else
      alert("Please Select Valid Name from List");
   	}
   	else
   	{
   		alert("Please enter Employee Name : ");
   		$scope.isfocus_employee_name = true;
   	}



   /*if(this.createdByEmpId == null)
   {
   	alert("Please enter your ID : ");
   	$scope.isfocus_empid = true;
   	
   }	*/

   if(this.comments_section == null)
   {
   	alert("Plese enter a comment");
   	$scope.isfocus_comments = true;
   
   }

   if(this.meetingTime == null)
   {
   	var date = new Date();
   // console.log(date);
   	var meeting_date=moment(date.toISOString()).format('DD-MM-YYYY hh:mm:ss a');
   	//console.log(meeting_date);
   }
   else
   {
    console.log(this.meetingTime);
   	var meeting_date=moment(this.meetingTime).format('DD-MM-YYYY hh:mm:ss a');
   }
   //console.log($scope.isfocus_created_by);
  // console.log($scope.isfocus_employee_name);
   //console.log($scope.isfocus_empid);
  // console.log($scope.isfocus_comments);
   if(!( $scope.isfocus_employee_name ||  $scope.isfocus_comments))
   {
   	$scope.login(employe_name,$rootScope.eid,this.comments_section,$rootScope.name,$rootScope.emp_id,meeting_date);
   }
 }



    $scope.login = function(employe_name,eid,comments_section,created_by,createdByEmpId,meeting_date){
    	$scope.showsuccess=false;
    	$scope.showerror=false;
    		
    //var obj = new Object();
    //obj.employee_name=this.selectedEmployee;
    //obj.comment=this.comments_section;
    //obj.created_by=this.createdBy;
    //obj.created_by_empid=this.createdByEmpId;
    //obj.impression_time=this.meetingTime;
    //$scope.jsondata=JSON.stringify(obj);		
    //alert('hi');
   // console.log(moment(this.meetingTime).format('DD-MM-YYYY hh:mm:ss'));
   

    var jsondata="{\"employee_name\": \""+employe_name+"\",\"eid\":"+eid+",\"comment\":\""+comments_section+"\",\"created_by\": \""+created_by+"\",\"created_by_empid\": \""+createdByEmpId+"\",\"impression_time\": \""+meeting_date+"\"}";
	console.log(jsondata);
	//console.log(this.selectedEmployee);
	//console.log(this.createdBy);
	var config = {
                headers : {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            };
    //$http.post('http://10.19.5.82:8089/SpringMVCRestDemo/rest/impressions',jsondata,config)
    //$http.post('http://localhost:8080/Impressions/rest/impressions',jsondata,config)
    ImpressionDetails.putImpressions(jsondata,config)
    .then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.PostDataResponse = response;
    $scope.showsuccess=true;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.ErrorResponse = response;
    $scope.showerror=true;
  });}
    //$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    

   EmployeeDetails.async().then(function(response){
    $scope.employees =  response.employees;  
    });
/*{
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
];	*/
$scope.tempData=$scope.employees;
//console.log($scope.employees);
});
