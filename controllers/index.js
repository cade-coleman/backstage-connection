const router = require('express').Router();

const bandRoutes = require('./api/bandRoutes');
const loginRoutes = require('./api/loginRoutes');
const venueRoutes = require('./api/venueRoutes');

router.use('/bands', bandRoutes);
router.use('/users', loginRoutes);
router.use('/venues', venueRoutes);

module.exports = router;