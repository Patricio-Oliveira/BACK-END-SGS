const Blocks = require('../models/Blocks');

module.exports = {
  async index(req, res) {
    
    const blocks = await Blocks.findAll()
    
    return res.json(blocks);
  },

  async store(req, res) {
    console.log('ok')
    const { name, } = req.body;
    const blocks = await Blocks.findOne({where:{name}})
    
    if(blocks){
      return res.status(400).json({erro : "Bloco já cadastrado"})
    }
     await Blocks.create({
      name,
  
    });

    return res.json({ok:true});
  }
};