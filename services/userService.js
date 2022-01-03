const { UserRepository } = require('../repositories/userRepository');

class UserService {

    //GET /api/users
    getAllUsers() {
        const item = UserRepository.getAll()
        if (!item) {
            return null;
        }
        return item;
    }

    //GET/api/users/id
    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
    //POST/api/users
    addUser(data) {
        const item = UserRepository.create(data)
        if (!item) {
            return null;
        }
        return item
    }
    //PUT /api/users /: id
    updateUsers(id, dataToUpdate) {
        const item = UserRepository.update(id, dataToUpdate)
        if (!item) {
            return null;
        }
        return item
    }


    //DELETE /api/users/:id
    dellUsers(id) {
        const item = UserRepository.delete(id)
        if (!item) {
            return null;
        }
        return item
    }





}

module.exports = new UserService();