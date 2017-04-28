'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    titulo: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    post: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    resumo: {
      type: DataTypes.STRING(100),
      allowNull: false
    }

  }, {
    classMethods: {
      associate: function(models) {

        post.belongsTo(models.categoria,{
          foreignKey: {name: 'categoria_id'},
          targetKey: 'id',
          as: 'categoria'
        });

        post.hasMany(models.comentario, {
          foreignKeyConstraint: true,
          foreignKey: {name: 'post_id'},
          targetKey: 'id',
          as: 'comentarios'
        });
        
      }
    }
  });
  return post;
};