const { Router } = require('express');
const userRouter = Router();
const authentication = require('../middleware/authentication');
const Controller = require('../controllers/userController');
userRouter.post('/login', Controller.login);
userRouter.post('/register', Controller.register);
userRouter.post('/topUp', authentication, Controller.topUp);
module.exports = userRouter;