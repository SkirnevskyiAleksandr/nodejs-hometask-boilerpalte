const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    addFighter(data) {
        const item = FighterRepository.create(data)
        if (!item) {
            return null;
        }
        return item
    }

    getAllFighters() {
        const item = FighterRepository.getAll()
        if (!item) {
            return null;
        }
        return item;
    }

    // TODO: Implement methods to work with user

    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
    // TODO: Implement methods to work with fighters
}

module.exports = new FighterService();