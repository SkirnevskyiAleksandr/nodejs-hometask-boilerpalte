const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    const { body } = req
    const bodyKeys = Object.keys(body)
    bodyKeys.map(item => {
        if (Object.keys(user).length - 1 === bodyKeys.length) {
            if (Object.keys(user)[item] === bodyKeys[item]) {
                console.log('all great!')
            } else {
                console.log("items not the same")
            }
        } else {
            console.log("please fill all data")
        }

    })
    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;