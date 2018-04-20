'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Tags', [{
        name: 'Javascript'
      },{
        name: 'Middleware'
      },{
        name: 'Session'
      },{
        name: 'Multer'
      },{
        name: 'Functional Programing'
      },{
        name: 'Asynchronous'
      },{
        name: 'Synchronous'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

   return queryInterface.bulkDelete('Tags', null, {});
  }
};
