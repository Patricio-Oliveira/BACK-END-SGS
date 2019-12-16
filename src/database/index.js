const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Teach = require('../models/Teach');
const Blocks = require('../models/Blocks');
const Room = require('../models/Room');
const Scheduling = require('../models/Scheduling');

const connection = new Sequelize(dbConfig);

User.init(connection);
Teach.init(connection);
Blocks.init(connection);
Room.init(connection);
Scheduling.init(connection);



User.associate(connection.models);
Teach.associate(connection.models);
Blocks.associate(connection.models);
Room.associate(connection.models);
Scheduling.associate(connection.models);


module.exports = connection;