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

    await queryInterface.bulkInsert("Categories", [
      {
        name: "Buche",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Roule",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Entremet",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Exotique",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Prestige",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Classique",
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
