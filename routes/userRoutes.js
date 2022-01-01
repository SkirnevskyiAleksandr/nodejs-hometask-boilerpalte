const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();
router.get('', function (req, res) {
    let allUsers = UserService.getAllUsers()
    res.send(allUsers)
})

router.post('', function (req, res) {
    let addUser = UserService.addUser(req.body)
    res.send(addUser)
})

// TODO: Implement route controllers for user

module.exports = router;