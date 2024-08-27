"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pegawai", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        foreignKey: true,
        references:{
          model: 'user',
          key: 'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        allowNull:false,
      },
      nama_lengkap: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tempat_lahir: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: true,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pegawai");
  },
};
