module.exports=(sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            primaryKey:true,
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false
          },
          username:{
            type:DataTypes.STRING,
            allowNull:false,
          },
          email:{
            type:DataTypes.STRING,
            allowNull:false
          },
          pass:{
            type:DataTypes.STRING,
            allowNull:true,
          },
          konf_pass:{
            type:DataTypes.STRING,
            allowNull:false,
          },
          createdAt:{
            type:DataTypes.DATE,
            // defaultValue: DataTypes.literal("CURRENT_TIMESTAMP")
          },
          updatedAt:{
            type: DataTypes.DATE,
            // defaultValue: DataTypes.literal("CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP")
          }
    }, {tableName:'user'});
    return User;
}