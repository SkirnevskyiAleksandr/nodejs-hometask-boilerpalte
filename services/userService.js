const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // const getName = user => user ? user.name : null;

    addUser(data) {
        const item = UserRepository.create(data)
        if (!item) {
            return null;
        }
        return item
    }

    getAllUsers() {
        const item = UserRepository.getAll()
        if (!item) {
            return null;
        }
        return item;
    }

    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();