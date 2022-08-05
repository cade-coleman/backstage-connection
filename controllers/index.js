const router = require('express').Router();

const apiRoutes = require('./api');
const projectRoutes = require('./projectRoutes');

router.use('/api', apiRoutes);
router.use('/', projectRoutes);

module.exports = router;