'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Step.belongsToMany(models.Form, { through: 'FormStep', foreignKey: 'stepId' });
    }
  }
  Step.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Step',
  });
  return Step;
};