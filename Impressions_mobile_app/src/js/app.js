angular.module('DoxNotes', [
  'ngRoute',
  'ngTouch',
  'mobile-angular-ui',
  'DoxNotes.controllers.Main',
  'ui.bootstrap'//,
  //'mgcrea.ngStrap',
  //'mgcrea.ngStrap.tooltip'
])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {templateUrl:'login.html', 
  controller: 'LoginCtrl'
  })
  .when('/home', {
    resolve : {
      "check" : function($location,$rootScope){
        if(!$rootScope.logged_in){
          $location.path('/');
        }
      }
    },
    templateUrl:'home_page.html', 
  controller: 'MainController',
  reloadOnSearch: false})
  .when('/reports', {
    resolve : {
      "check" : function($location,$rootScope){
        if(!$rootScope.logged_in){
          $location.path('/');
        }
      }
    },
    templateUrl:'impression_reports.html', 
  controller: 'ReportsController',
  reloadOnSearch: false})
  .otherwise({
    redirectTo : '/'
  });
});
