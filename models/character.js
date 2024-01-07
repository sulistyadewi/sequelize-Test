'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  character.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    kru: DataTypes.STRING,
    power: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'character',
  });
  return character;
};