"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Gift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Gift.belongsTo(models.Age);
      Gift.hasMany(models.MatterGift);
    }
  }
  Gift.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Gift",
    }
  );
  return Gift;
};
