const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();
//GET /api/users
router.get('', function (req, res) {
    let allUsers = UserService.getAllUsers()
    res.send(allUsers)
})

//GET / api / users /: id
router.get('/:id', function (req, res) {
    let oneUser = UserService.search(
        function (element) {
            if (element.id == req.params.id) {
                return element
            }
        })
    res.send(oneUser)
})

//POST /api/users
router.post('', createUserValid, function (req, res) {

    let addUser = UserService.addUser(req.body)
    res.send(addUser)
})


//PUT /api/users /: id
router.put('/:id', updateUserValid, function (req, res) {

    let oneUser = UserService.search(
        function (element) {
            if (element.id == req.params.id) {
                return element
            }
        })
    let updUser = UserService.updateUsers(req.params.id, oneUser)
    res.send(updUser)

})


//DELETE /api/users/:id
router.delete('/:id', function (req, res) {
    let dellUser = UserService.dellUsers(req.params.id)
    res.send(dellUser)
})


// TODO: Implement route controllers for user

module.exports = router;