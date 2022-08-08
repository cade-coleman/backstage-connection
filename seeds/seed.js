const sequelize = require('../config/connection');
const { User, Band, Venue } = require('../models');

const userData = require('./userData.json');
const bandData = require('./bandData.json');
const venueData = require('./venueData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Band.bulkCreate(bandData, {
        individualHooks: true,
        returning: true,
    });

    await Venue.bulkCreate(venueData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();