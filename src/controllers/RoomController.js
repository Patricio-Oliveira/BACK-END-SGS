const Blocks = require('../models/Blocks');
const Room = require('../models/Room');

module.exports = {
  async index(req, res) {
    
    const room = await Room.findAll()
    
    return res.json(room);
  },

  async store(req, res) {
    const { blocks_id, name } = req.body;
    const roomExists = await Room.findOne({ where: { name: req.body.name } });
      if (roomExists) {
        return res.status(400).json({ error: 'Sala já Cadastrada' });
    }
    const blocks = await Blocks.findOne({where:{id:blocks_id}})

    if(!blocks){
      return res.status(400).json({erro : "Bloco inválido"})
    }

    const room = await Room.findOne({where:{name}})
    
    if(room){
      return res.json(room)
    }

     await Room.create({
      name,
      blocks_id,
    });

    return res.json({ok:true});
  }
};