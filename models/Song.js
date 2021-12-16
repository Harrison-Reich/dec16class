const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Song extends Model { }

Song.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  release: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'song' })

module.exports = Song