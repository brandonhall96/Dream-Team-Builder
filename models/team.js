'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  team.init({
    teamName: DataTypes.STRING,
    city: DataTypes.STRING,
    link: DataTypes.STRING,
    venue: DataTypes.STRING,
    founded: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'team',
  });
  return team;
};