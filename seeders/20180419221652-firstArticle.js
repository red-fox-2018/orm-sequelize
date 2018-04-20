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

  //  1	Using Middleware On Express JS	This is How to Use Middleware, you need to .... ya that`s it	1	2	2018-02-20 20:32:21.008+07	2018-02-20 20:32:21.009+07
  //  2	Using Session On Express JS	Before we use Session the one thing that you should know is about session it self, you need to .... ya that`s it	2	3	2018-02-20 20:32:21.009+07	2018-02-20 20:32:21.009+07
  //  \.

  // title: {
  //   type: Sequelize.STRING
  // },
  // body: {
  //   type: Sequelize.STRING
  // },
  // id_author: {
  //   type: Sequelize.INTEGER
  // },
  // id_tag: {
  //   type: Sequelize.INTEGER
  // }

  return queryInterface.bulkInsert('Articles', [{
    title: 'Using Middleware On Express JS',
    body: 'This is How to Use Middleware, you need to .... ya that`s it',
    id_author: 1,
    id_tag: 2
  },{
    title: 'Using Session On Express JS',
    body: 'Before we use Session the one thing that you should know is about session it self, you need to .... ya that`s it',
    id_author: 2,
    id_tag: 3
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
