app.controller('mainCtrl', function($scope, beerFactory){
  $scope.addBeer = function(newBeer) {
    console.log('================from ctrl================')
    console.log(newBeer)
    beerFactory.addBeer(newBeer).then(function(beer) {
      $scope.beers.push(beer);
    });
  }

  $scope.removeBeer = function(beerToRemove) {
    beerFactory.removeBeer(beerToRemove).then(function(beer) {
      console.log('back from the ole server');
      console.log(beer)
      for (var i = 0; i < $scope.beers.length; i++) {
        if ($scope.beers[i]._id = beerToRemove._id) {
          $scope.beers.splice(i, 1);
          break;
        }
      }
    });
  }

  beerFactory.getBeers().then(function(beers) {
    $scope.beers = beers;
  });
})