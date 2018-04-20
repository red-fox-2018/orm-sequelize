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

  return queryInterface.bulkInsert('Authors', [{
    first_name: 'Erwin',
    last_name: 'Ramadhan',
    religion: 'Islam',
    gender: 'Male',
    age: 20
  },{
    first_name: 'Cu',
    last_name: 'Chu',
    religion: 'Islam',
    gender: 'Male',
    age: 22
  },{
    first_name: 'Ryougi',
    last_name: 'Shiki',
    religion: 'Budha',
    gender: 'Female',
    age: 19
  },{
    first_name: 'Nara',
    last_name: 'Sikamaru',
    religion: 'Islam',
    gender: 'Male',
    age: 17
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

   return queryInterface.bulkDelete('Authors', null, {});
  }
};
