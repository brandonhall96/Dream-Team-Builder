'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.player.belongsTo(models.team);
      // models.player.belongsTo(models.user);
    }
  };
  player.init({
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    position: DataTypes.STRING,
    jerseyNumber: DataTypes.INTEGER,
    salary: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};