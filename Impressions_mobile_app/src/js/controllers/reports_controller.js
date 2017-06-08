angular.module('DoxNotes')
.controller('ReportsController',function($scope,$location,$rootScope,ImpressionDetails)
{
/*$rootScope.logged_in = true ;
$location.path('/reports');*/
$scope.impressions_data = ImpressionDetails.getImpressionsPerEmployee();
//console.log($scope.impressions_data);
$scope.impressions_json = ImpressionDetails.getImpressionsDataPerEmployee();
console.log($scope.impressions_json);
});