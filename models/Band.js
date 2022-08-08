const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Band extends Model {}

Band.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    //added user_id
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "user",
          key: "id"
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING ,
      allowNull: false,
      validate: {len:[8],
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'band',
  },
  

);

module.exports = Band;