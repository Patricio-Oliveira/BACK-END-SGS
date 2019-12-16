const User = require('../models/User');

module.exports = {
    async index(req, res){
      const users = await User.findAll();
      
      return res.json(users);
    },

    async store(req, res) {
      const { name, email, senha } = req.body;
      const userExists = await User.findOne({ where: { email: req.body.email } });
      if (userExists) {
        return res.status(400).json({ error: 'Usuário já existe' });
    }

      const user = await User.create({ name, email, senha });

      return res.json(user);
    }
};  