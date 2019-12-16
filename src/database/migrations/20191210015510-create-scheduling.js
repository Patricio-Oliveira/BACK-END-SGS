'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('schedulings', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        teach_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'teaches', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        room_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'rooms', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        starttime: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        departuretime: {
          type: Sequelize.DATE,
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
      return queryInterface.dropTable('schedulings');
  }
};
