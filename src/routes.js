const express = require('express');
const UserController = require('./controllers/UserController');
const TeachController = require('./controllers/TeachController');
const BlocksController = require('./controllers/BlocksController');
const RoomController = require('./controllers/RoomController');
const SchedulingController = require('./controllers/SchedulingController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store); 

routes.get('/teach', TeachController.index);
routes.post('/teach', TeachController.store);

routes.get('/blocks', BlocksController.index);
routes.post('/blocks', BlocksController.store);

routes.get('/room', RoomController.index);
routes.post('/room', RoomController.store);

routes.get('/scheduling', SchedulingController.index);
routes.post('/scheduling', SchedulingController.store);
routes.delete('/scheduling', SchedulingController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;