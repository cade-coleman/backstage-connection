const router = require('express').Router();

const bandRoutes = require('./bandRoutes.js');
const venueRoutes = require('./venueRoutes');
const userRoutes = require('./loginRoutes');

router.use('/bands', bandRoutes);
router.use('/venues', venueRoutes);
router.use('/users', userRoutes);

module.exports = router;
