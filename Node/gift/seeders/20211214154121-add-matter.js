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

    await queryInterface.bulkInsert("MatterGift", [
      {
        name: "Plastic",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Iron",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gold",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Silver",
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
