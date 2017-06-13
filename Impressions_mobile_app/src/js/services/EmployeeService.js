angular.module('DoxNotes')
.service('EmployeeDetails',function($http){

  //var employees ;
	var getEmployees = {
    async : function(){
    return $http.get('http://localhost:8080/Impressions/rest/employees').then(function (response) {
        // The then function here is an opportunity to modify the response
        //console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
	}
};

 /* var employees = [
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
];	*/

/*return {
            getEmployees: function () {
                return this.employees;
            }
        };*/
return getEmployees;
})