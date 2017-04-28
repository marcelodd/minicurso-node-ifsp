'use strict';
module.exports = function(sequelize, DataTypes) {
  var comentario = sequelize.define('comentario', {
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      autor: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      comentario: {
        type: DataTypes.STRING(10000),
        allowNull: false
      },
  }, {
    classMethods: {
      associate: function(models) {
       
        comentario.belongsTo(models.post, {
          foreignKey: {name: 'post_id'},
          targetKey: 'id',
          as: 'post'
        });

      }
    }
  });
  return comentario;
};