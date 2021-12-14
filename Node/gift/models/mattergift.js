"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MatterGift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MatterGift.belongsTo(models.Gift);
    }
  }
  MatterGift.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MatterGift",
    }
  );
  return MatterGift;
};
