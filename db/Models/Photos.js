const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = require('../db.js');


class Photos extends Model {}

Photos.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  styleId: {
    type: DataTypes.INTEGER,
    references:{
      model:"Styles",
      key: 'id'
    },
  },
  url:{
    type: DataTypes.TEXT,
  },
  thumbnail_url:{
    type: DataTypes.TEXT,
  },


}, {
  sequelize: seq
});

module.exports = Photos;