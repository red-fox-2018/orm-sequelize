/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    religion: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Author.associate = function(models) {
    // associations can be defined here
  };
  return Author;
};
