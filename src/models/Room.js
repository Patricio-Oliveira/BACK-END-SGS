const { Model, DataTypes } = require('sequelize');

class Room extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      blocks_id: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Blocks, { foreignKey: 'blocks_id'});
  }
}


module.exports = Room;