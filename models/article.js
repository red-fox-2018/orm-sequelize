/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    id_author: DataTypes.INTEGER,
    id_tag: DataTypes.INTEGER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};
