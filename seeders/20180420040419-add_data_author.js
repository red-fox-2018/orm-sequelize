'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Authors', [{
        firstName: 'erwin',
        lastName: 'ramadhan',
        religion: 'islam',
        gender:'male',
        age:20,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'cu',
        lastName: 'chu',
        religion: 'islam',
        gender:'male',
        age:22,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'ryougi',
        lastName: 'shiki',
        religion: 'budha',
        gender:'female',
        age:19,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: 'nara',
        lastName: 'sikamaru',
        religion: 'islam',
        gender:'male',
        age:17,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

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
