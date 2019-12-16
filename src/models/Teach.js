const { Model, DataTypes } = require('sequelize');

class Teach extends Model {
  static init(sequelize) {
    super.init({
      cpf: DataTypes.STRING,
      name: DataTypes.STRING,
      siape: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    //this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Teach;
    
 