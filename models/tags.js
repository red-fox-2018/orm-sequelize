'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tags = sequelize.define('Tags', {
    tagsId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Tags.associate = function(models) {
    // associations can be defined here
  };
  return Tags;
};