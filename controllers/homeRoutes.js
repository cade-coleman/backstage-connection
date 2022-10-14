const router = require('express').Router();
const { Band, Venue } = require('../models');
const withAuth = require('../utils/auth');

// Routes go here

// Home Routes to Log in
router.get('/', (req,res) => {
 res.render('landingPage')
});


router.get('/login', (req,res) => {
 res.render('login')
});


// 
router.get('/homepage', (req,res) => {
 res.render('homepage')

});




// 8/8/2022 @ 21:53 - modified get route that appends seeded data to localhost:3004/band
router.get('/band', async (req, res) => {
  try {
    const bandData = await Band.findAll({});

    const bands = bandData.map((band) => band.get({ plain: true }));

    res.render('band', {bands});
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/band/:id', async (req, res) => {
  try {
    const bandData = await Band.findByPk(req.params.id);
    
    const band = bandData.get({ plain: true });

    res.render('bandByID',  { band });
  } catch (err) {
    res.status(500).json(err);
  }
});



//get all venues
//router.get('/venue', (req, res) => {
  //Venue.findAll({
    //attributes: ['id', 'name', 'location', 'website'],
  //})
    //.then(dbVenuedata => res.json(dbVenuedata))
    //.catch(err => {
      //console.log(err);

      //res.status(500).json(err);
    //});
//});
router.get('/venue', async (req, res) => {
  try {
    const venueData = await Venue.findAll({});

    const venues = venueData.map((venue) => venue.get({ plain: true }));

    res.render('venue', {venues});
  } catch (err) {
    res.status(500).json(err);
  }
});
//get one venue
router.get('/venue/:id', async (req, res) => {
  try {
    const venueData = await Venue.findByPk(req.params.id);
    
    const venue = venueData.get({ plain: true });

    res.render('venueByID',  { venue });
  } catch (err) {
    res.status(500).json(err);
  }
});



// Render signup pages
router.get('/suBand', (req, res) => {
  res.render('signUpBand');

});
router.get('/suVenue', (req, res) => {
  res.render('signUpVenue');

});

//test


module.exports = router;