'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  roster.init({
    fullName: DataTypes.STRING,
    currentTeam: DataTypes.STRING,
    jerseyNumber: DataTypes.INTEGER,
    position: DataTypes.STRING,
    careerPoints: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roster',
  });
  return roster;
};