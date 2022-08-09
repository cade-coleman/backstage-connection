const router = require('express').Router();


// Routes go here
const { User,Venue } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const newVenue = await Venue.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      location: req.body.location,
      website: req.body.website,
      phone: req.body.phone
    })

    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;