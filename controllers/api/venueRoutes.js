const router = require('express').Router();
// const withAuth = require('../../utils/auth');

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

//get all venues
router.get('/', (req,res)=>{
  Venue.findAll({
    attributes: ['id', 'name', 'location', 'link']
  })
  .then(dbVenuedata => res.json(dbVenuedata))
  .catch(err=>{
  console.log(err);
  res.status(500).json(err);
  });
  });
  //get one venue
  router.get('/:id', (req, res) => {
    
    Venue.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'name', 'location', 'link'],
      
    })
      .then(dbVenuedata => {
        if (!dbVenuedata) {
          res.status(404).json({message: 'No Venue found with this id'});
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