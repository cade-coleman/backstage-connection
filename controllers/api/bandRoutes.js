const router = require('express').Router();
const { User,Band } = require('../../models');
// const auth = require('../../utils/auth');
// Routes go here
const { User,Band } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const dbBanddata = await Band.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({dbUserData,dbBanddata});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get all bands
router.get('/', (req,res)=>{
Band.findAll({
  attributes: ['id', 'name', 'genre', 'link']
})
.then(dbBanddata => res.json(dbBanddata))
.catch(err=>{
console.log(err);
res.status(500).json(err);
});
});
//get one band
router.get('/:id', (req, res) => {
  
  Band.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'name', 'genre', 'link'],
    
  })
    .then(dbBanddata => {
      if (!dbBanddata) {
        res.status(404).json({message: 'No Band found with this id'});
        return;
      }
      res.json(dbBanddata);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;