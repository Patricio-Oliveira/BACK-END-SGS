const { Model, DataTypes } = require('sequelize');

class Blocks extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
  }
}


module.exports = Blocks;