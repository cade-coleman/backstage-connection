
const Band = require('./Band');
const Venue = require('./Venue');
const User = require('./User');

Band.hasMany(Venue, {
  foreignKey: 'id',
});

Venue.hasMany(Band, {
  foreignKey: 'id',
});

Venue.belongsTo(User, {
  foreignKey: 'email',
});

Band.belongsTo(User, {
  foreignKey: 'email',
});

module.exports = { Band, Venue, User };