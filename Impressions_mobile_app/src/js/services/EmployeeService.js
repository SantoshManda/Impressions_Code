angular.module('DoxNotes')
.service('EmployeeDetails',function($http){
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


  var employees = [
{
"eid": 1,
"firstName": "Vilkesh Patel"
},
{
"eid": 2,
"firstName": "Pankaj Dhumal"
},
{
"eid": 3,
"firstName": "Niraj Baghele"
},
{
"eid": 4,
"firstName": "Viraj Kamath"
},
{
"eid": 5,
"firstName": "Santosh Manda"
}
];	

return {
            getEmployees: function () {
                return employees;
            }
        };
//return employees;
})