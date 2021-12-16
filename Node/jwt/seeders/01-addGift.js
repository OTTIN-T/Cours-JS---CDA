"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Gifts", [
      {
        name: "PS5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "XBOX",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SWITCH",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Geforce RTX 380Ti",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PC",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
