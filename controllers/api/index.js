const router = require('express').Router();

const bandRoutes = require('./bandRoutes');
const venueRoutes = require('./venueRoutes');
const userRoutes = require('./loginRoutes');


// Calling routes inside api folder
router.use('/bands', bandRoutes);
router.use('/venues', venueRoutes);
router.use('/users', userRoutes);

module.exports = router;
