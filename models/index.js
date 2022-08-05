
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
  foreignKey: 'username',
});

Band.belongsTo(User, {
  foreignKey: 'username',
});

module.exports = { Band, Venue, User };