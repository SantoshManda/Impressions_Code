angular.module('DoxNotes')
.controller('ReportsController',function($scope,$location,$rootScope,ImpressionDetails)
{
/*$rootScope.logged_in = true ;
$location.path('/reports');*/
ImpressionDetails.async().then(function(response){
	//console.log(response);
	$scope.impressions_data = response;
	console.log($scope.impressions_data);
});
//console.log($scope.impressions_data);

/*for(var i = 0; i < $scope.impressions_data.length ; i++)
	{

	ImpressionDataDetails.async($scope.impressions_data[i].eid).then(function(response){
	//console.log(response);
	$scope.impressions_json[i] = response;
});
}*/

//console.log($scope.impressions_json);
});