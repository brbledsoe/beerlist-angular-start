app.controller('beerCtrl', function($scope, $stateParams, beerFactory) {
  console.log('we just got to the beer states ctrl')
  console.log($stateParams);

  $scope.beer = $stateParams.beerParam;

  if (!$stateParams.beerParam) {
    beerFactory.getBeer($stateParams.id)
      .then(function(beer) {
        $scope.beer = beer;
      })
  } else {
    $scope.beer = $stateParams.beerParam;
  }


})