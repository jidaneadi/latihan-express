'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('user', { 
      id: {
        primaryKey:true,
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false
      },
      username:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false
      },
      pass:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      konf_pass:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      createdAt:{
        type:"TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP")
      }
     });

     
     await queryInterface.addConstraint('user', {
      type:'unique',
      fields:['username'],
      name:'UNIQUE_NAME'
     });
    
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('user');
     
  }
};
