angular.module('DoxNotes').controller('LogOutCtrl',function($scope,$location,$rootScope){
$scope.logout = function(){
	$rootScope.logged_in = false ;
	$location.path('#!/');
}
});