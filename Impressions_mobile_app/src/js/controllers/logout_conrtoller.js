angular.module('DoxNotes').controller('LogOutCtrl',function($scope,$location,$rootScope){
var logout = function(){
	$rootScope.logged_in = false ;
	$location.path('#!/');
};
});