
const Band = require('./Band');
const Venue = require('./Venue');

Band.hasMany(Venue, {
  foreignKey: 'id',
});

Venue.hasMany(Band, {
  foreignKey: 'id',
});

module.exports = { Band, Venue };