const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    const { body } = req
    const err = new Error()
    const bodyKeys = Object.keys(body)
    bodyKeys.map(item => {
        // if (Object.keys(user).length - 1 === bodyKeys.length) {
        console.log(bodyKeys[item])
        if (Object.keys(user)[item] === bodyKeys[item]) {
            console.log(bodyKeys[item])
            switch (item) {
                case 'firstName':
                    if (body.firstName.length <= 0) {
                        res.status(400)
                        console.log('wrong firstName')
                    }
                    break;
                case 'lastName':
                    if (body.lastName.length <= 0) {
                        res.status(400)
                        console.log(" wrong lastName")
                    }
                    break;
                case 'email':
                    if (!(/@gmail.com$/.test(body.email))) {
                        res.status(400).send(err)
                        console.log(" wrong email")
                    } break;
                case 'phoneNumber':
                    if (!(/\+380\d{9}/.test(body.phoneNumber))) {
                        res.status(400).send(err)
                        console.log(" wrong phoneNumber")
                    } break
                case 'password':
                    if (!(typeof (body.password) == 'sting') && (body.password.length < 3)) {
                        res.status(400).send(err)
                        console.log("wrong password(less then 3 symbols")
                        console.log(typeof (body.password))
                    }
                default:
                    break
            }
        } else {
            console.log("items not the same")
        }

    })
    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    const { body } = req
    const bodyKeys = Object.keys(body)
    const userKeys = Object.keys(user)
    try {
        bodyKeys.map((bodyItem) => {
            userKeys.map((userItem) => {
                if (bodyItem == userItem) { // в этой части кода не уверен
                    next()
                }
            })
        })


    }
    catch (err) {
        res.status(400)
        console.log('no same fills')
    }

}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;


