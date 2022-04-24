const express = require('express');
const router = express.Router();
// const { createUser, findAllUsers, findUserById, updateUser, deleteUser } = require('./controllers/user.controller');
const UserController = require('./controllers/user.controller');

router.get('/', (req, res) =>{    
    res.send('Hello ORM by Express ✨');
})

router.post('/user', UserController.createUser);
router.get('/users', UserController.findAllUsers);
router.get('/user/:id', UserController.findUserById);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

export default router;