"use strict";
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("FormSteps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      formId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Forms", // Name of the referenced table
          key: "id", // Primary key of the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      stepId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Steps", // Name of the referenced table
          key: "id", // Primary key of the referenced table
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("FormSteps");
  },
};
