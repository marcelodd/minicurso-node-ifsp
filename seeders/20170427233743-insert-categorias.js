'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categoria', [
      {
        descricao: 'JAVA',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        descricao: 'DELPHI',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        descricao: 'NodeJS',
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categoria', null, {});
  }
};
