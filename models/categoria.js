'use strict';
module.exports = function(sequelize, DataTypes) {
  var categoria = sequelize.define('categoria', {
    descricao: DataTypes.STRING(30)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return categoria;
};