module.exports=(sequelize, DataTypes)=>{
    const Pegawai = sequelize.define('Pegawai', {//Nama harus sesuai variabel
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          user_id:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            references:{
              model: 'user',
              key: 'id'
            },
            allowNull:false,
          },
          nama_lengkap: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          tempat_lahir: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          alamat: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          createdAt: {
            type:DataTypes.DATE,
            allowNull: true,
          },
          updatedAt: {
            type:DataTypes.DATE,
            allowNull: true,
          },
    }, {tableName:'pegawai'});

    // Pegawai.associate = function(models) {
    //     Pegawai.belongsTo(models.User, {
    //         foreignKey: 'user_id',
    //         as: 'user'
    //     });
    // };
    return Pegawai;
}