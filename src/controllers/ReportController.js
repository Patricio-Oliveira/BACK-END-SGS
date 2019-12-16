const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {

    const users = await User.findAll({
      attributes: ['name', , 'email', 'data'],
      where: {
        email: {
          [Op.iLike]: '%@patriciosabino66.com'
        }
      },
      include: [
        { 
          association: 'teaches', 
          where: { 
            nome: 'Patricio'
          } 
        },
        { 
          association: 'blocks', 
          required: false,
          where: {
            name: {
              [Op.iLike]: 'A%'
            }
          }
        },
        { 
            association: 'room', 
            required: false,
            where: {
              name: {
                [Op.iLike]: '45'
              }
            }
          },
          { 
            association: 'scheduling', 
            required: false,
            where: {
              data: {
                [Op.iLike]: '13122019'
              }
            }
          },
      ]
    })

    return res.json(users);
  }
};