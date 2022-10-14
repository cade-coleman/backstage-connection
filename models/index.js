
const Band = require('./Band');
const Venue = require('./Venue');
const User = require('./User');

//added cascade and changed foreign key
Band.hasMany(Venue, {
  foreignKey: 'band_id',
  onDelete: "CASCADE"
});

Venue.hasMany(Band, {
  foreignKey: 'venue_id',
  onDelete: "CASCADE"
});

Venue.belongsTo(User, {
  foreignKey: 'user_id',
});

Band.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Band, Venue, User };