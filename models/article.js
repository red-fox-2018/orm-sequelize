'use strict';
module.exports = (sequelize, DataTypes) => {
  var article = sequelize.define('article', {
    article: DataTypes.STRING
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};