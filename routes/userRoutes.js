const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();
//GET /api/users
router.get('', function (req, res) {
    let allUsers = UserService.getAllUsers()
    res.send(allUsers)
    console.log("//GET /api/users")
})

//GET / api / users /: id
router.get('', function (req, res) {
    let oneUser = UserService.search(req.params.id) //??????
    res.send(oneUser)
    console.log(req.params.id)
})

//POST /api/users
router.post('', function (req, res) {
    let addUser = UserService.addUser(req.body)
    res.send(addUser)
})


// //PUT /api/users /: id
router.put('', function (req, res) {
    let updUser = UserService.updateUsers(req.body) //??????
    res.send(updUser)
    console.log(req.body)
})


//DELETE /api/users/:id
router.delete('/api/users/:id', function (req, res) {
    let dellUser = UserService.dellUsers(req.params.id)
    res.send(dellUser)
})


// TODO: Implement route controllers for user

module.exports = router;