mainApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    redirectTo: '/home',
  })
  .when('/home', {
    controller: 'homeController',
    title: 'Home',
    templateUrl: '../pages/home.html',
  })
  ;
});

mainApp.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
  });
}]);
