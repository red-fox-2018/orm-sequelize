/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const {
   sequelize
} = require('../models');

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
         type: Sequelize.DATE,
         defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
         type: Sequelize.DATE,
         defaultValue: sequelize.literal('NOW()')
      }
   }, {
      timestamps: true
   });
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tags');
  }
};
