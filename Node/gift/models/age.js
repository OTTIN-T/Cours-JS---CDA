"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Age extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Age.hasMany(models.Gift);
    }
  }
  Age.init(
    {
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Age",
    }
  );
  return Age;
};
