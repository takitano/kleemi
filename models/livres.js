'use strict';
module.exports = function(sequelize, DataTypes) {
  var livres = sequelize.define('livres', {
    id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return livres;
};