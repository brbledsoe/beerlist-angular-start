var express = require('express');
var router = express.Router();
var Beer = require("../models/BeerModel");

//***********************************************//
//***Beer routes for GET, POST, DELETE and PUT***//
//***********************************************//

router.get('', function(req, res, next){
  Beer.find({}).exec(function(err, beerzzz){
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beerzzz);
    }
  })
});

router.get('/:id', function(req, res, next) {
  Beer.findById(req.params.id, function(error, beer) {
    if (error) {
      console.error(error)
      return next(error);
    } else {
      res.send(beer);
    }
  });
});

router.post('', function(req, res, next) {
  Beer.create(req.body, function(err, beer) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.json(beer);
    }
  });
});

router.post('/:id/reviews', function(req, res, next) {
  console.log('=========req body ===========')
  console.log(req.body)
  console.log('=========req body ===========')
  console.log(req.params.id)
  Beer.findById(req.params.id, function(err, foundBeer) {
    if (err) {
      console.error(err);
      return next(err);
    } else if (!foundBeer) {
      return res.send("Error! No beer found with that ID");
    } else {
      foundBeer.reviews.push(req.body)
      foundBeer.save(function(err, updatedBeer) {
        if (err) {
          return next(err);
        } else {
          res.send(updatedBeer);
        }
      });
    }
  });
});

router.delete('/:id', function(req, res, next) {
  Beer.remove({ _id: req.params.id }, function(err) {
    if (err) {
      console.error(err)
      return next(err);
    } else {
      res.send("Beer Deleted");
    }
  });
});


module.exports = router;