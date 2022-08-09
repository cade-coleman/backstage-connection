
// importing functions and what not
const router = require('express').Router();
const { User,Band } = require('../../models');

// Routes go here


// CREATE new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const newBandInfo = await Band.create({
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      genre: req.body.genre,
      name: req.body.name,
      website: req.body.website,
      bio: req.body.bio,
    })

  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;