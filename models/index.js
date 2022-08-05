
const Band = require('./Band');
const Venue = require('./Venue');
const User = require('./User');

Band.hasMany(Venue, {
  foreignKey: 'id',
});

Venue.hasMany(Band, {
  foreignKey: 'id',
});

Venue.hasMany(User, {
  foreignKey: 'id',
});

module.exports = { Band, Venue, User };