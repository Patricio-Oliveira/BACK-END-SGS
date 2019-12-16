const { Model, DataTypes } = require('sequelize');

class Scheduling extends Model {
  static init(sequelize) {
    super.init({
      starttime: DataTypes.DATE,
      departuretime: DataTypes.DATE,
      user_id:DataTypes.STRING,
      teach_id:DataTypes.STRING,
      room_id:DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id'});
    this.belongsTo(models.Teach, { foreignKey: 'teach_id' });
    this.belongsTo(models.Room, { foreignKey: 'room_id' });
  }
}


module.exports = Scheduling;