var app = angular.module('beerList', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'mainCtrl',
      templateUrl: '/templates/home.html'
    })
    .state('beer', {
      url: '/beers/:id',
      controller: 'beerCtrl',
      templateUrl: '/templates/beer.html',
      params: {
        beerParam: null,
        test:  null
      }
    })
    // .state('test', {
    //   url: '/test', 
    //   controller: 'beerCtrl',
    //   template: '<h1>heyo</h1>'
    // })

  $urlRouterProvider.otherwise('/home');
}]);
