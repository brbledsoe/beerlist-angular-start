app.factory('beerFactory', function($http) {

  var beerFactory = {};

  beerFactory.getBeers = function() {
    return $http.get('/beers')
      .then(function(response) {
        return response.data;
        //if wanted/needed you can do data manipulation and parsing here

        //our returned data is wrapped in a pre-resolved promise
        //we can access that data in our controller using '.then' 
        return response.data
      }, function(err) {
        console.error(err)
      });
  };

  beerFactory.getBeer = function(id) {
    return $http.get('/beers/' + id)
      .then(function(response) {
        return response.data
      }, function(err) {
        console.error(err)
      });
  };

  beerFactory.addBeer = function(newBeer) {
    return $http.post('/beers', newBeer)
      .then(function(response) {
        console.log('================bck from server================')
        console.log(response)
        return response.data
      }, function(err) {
        console.error(err)
      });
  };

  beerFactory.removeBeer = function(beerToRemove) {
    return $http.delete('/beers/' + beerToRemove._id)
      .then(function(response) {
        return response.data;
      }, function(err) {
        console.error(err)
      });
  };

  return beerFactory;
});