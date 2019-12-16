'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('blocks', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      //teach_id: {
        //type: Sequelize.INTEGER,
        //allowNull: false,
        //references: { model: 'teach', key: 'id' },
        //onUpdate: 'CASCADE',
        //onDelete: 'CASCADE',
      //},
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
},
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('blocks');

  }
};
