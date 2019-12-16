const Teach = require('../models/Teach')

module.exports = {
  async index(req, res) {
    
    const teach = await Teach.findAll()
    
    return res.json(teach);
  },

  async store(req, res) {
    console.log('ok')
    const { cpf, name, siape } = req.body;
    const teach = await Teach.findOne({where:{cpf}})
    if(teach){
      return res.status(400).json({erro : "CPF cadastrado"})
    }
     await Teach.create({
      cpf,
      name,
      siape
    });

    return res.json({ok:true});
  }
};