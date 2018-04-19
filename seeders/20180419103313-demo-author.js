'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Authors',
   [
    {
      firstName: 'Iswanul',
      lastName: 'Umam',
      religion: 'Islam',
      gender: 'male',
      age: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
