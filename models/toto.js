'use strict';
module.exports = function(sequelize, DataTypes) {
  var toto = sequelize.define('toto', {
    pom: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return toto;
};