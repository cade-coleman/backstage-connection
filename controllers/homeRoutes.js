const router = require('express').Router();
const { Band, Venue } = require('../models');
const withAuth = require('../utils/auth');

// Routes go here
//get all bands
router.get('/band', (req, res) => {
  Band.findAll({
    attributes: ['id', 'name', 'genre', 'link']
  })
  .then(dbBanddata => res.json(dbBanddata))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  

  
});


//get one band
router.get('/band/:id', (req, res) => {

  Band.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name', 'genre', 'link'],

  })
    .then(dbBanddata => {
      if (!dbBanddata) {
        res.status(404).json({ message: 'No Band found with this id' });
        return;
      }
      res.json(dbBanddata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



//get all venues
router.get('/venue', (req, res) => {
  Venue.findAll({
    attributes: ['id', 'name', 'location', 'link']
  })
    .then(dbVenuedata => res.json(dbVenuedata))
    .catch(err => {
      console.log(err);

      res.status(500).json(err);
    });
});
//get one venue
router.get('/venue/:id', (req, res) => {

  Venue.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name', 'location', 'link'],

  })
    .then(dbVenuedata => {
      if (!dbVenuedata) {
        res.status(404).json({ message: 'No Venue found with this id' });
        return;
      }

      res.json(dbVenuedata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;