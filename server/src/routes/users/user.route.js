const express = require('express');
const { authUser, getUserProfile } = require('./user.controller')
const protect = require('../../middleware/authMiddleware')

const userRouter = express.Router();


userRouter.post('/login', authUser);
userRouter.route('/profile').get(protect, getUserProfile)


module.exports = { userRouter };