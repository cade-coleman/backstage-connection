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

    })

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({newUser,newBandInfo});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;