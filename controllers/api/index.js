const router = require('express').Router();
const bandRoutes = require('./bandRoutes');
const venueRoutes = require('./venueRoutes');

router.use('/bands', bandRoutes);
router.use('/venues', venueRoutes);

module.exports = router;
