const {parseISO, format } = require('date-fns')
const {Op} = require('sequelize')
const User = require('../models/User');
const Teach = require('../models/Teach');
const Room = require('../models/Room');
const Scheduling = require('../models/Scheduling');

module.exports = {
    async index(req, res) {
    
    const scheduling = await Scheduling.findAll()
    
    return res.json(scheduling);
  },

  async store(req, res) {
    const { user_id, teach_id, room_id, starttime, departuretime } = req.body;

    const schedulingExists = await Scheduling.findOne({ where: { departuretime: {[Op.between]: [starttime, departuretime]},room_id },  });
      if (schedulingExists) {
        return res.status(400).json({ error: 'Agendamento já cadastrado, Dia, Horário, Data e Sala.' });
    }
    
    const user = await User.findByPk(user_id)

    if(!user){
      return res.status(400).json({erro: "Usuario Inválido"})
    }
    
    const teach = await Teach.findByPk(teach_id)

    if(!teach){
      return res.status(400).json({erro: "Professor Inválido"})
    }

    const room = await Room.findByPk(room_id)

    if(!room){
      return res.status(400).json({erro: "Sala Inválida"})
    }

    await Scheduling.create({
      starttime,
      departuretime,
      user_id,
      teach_id,
      room_id,
    })
    return res.json({ok:true});
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { data } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'Agendamento apagado' });
    }

    const Scheduling = await Teach.findOne({
      where: { Data }
    });

    await user.removeTeach(Scheduling);

    return res.json();
  }
};