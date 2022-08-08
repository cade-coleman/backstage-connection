const router = require('express').Router();


// Routes go here
const { User,Venue } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const dbVenuedata = await Venue.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({dbUserData,dbVenuedata});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;