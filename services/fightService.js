const { FightRepository } = require('../repositories/fightRepository');

class FightersService {
    addFight(data) {
        const item = FightRepository.create(data)
        if (!item) {
            return null;
        }
        return item
    }
    getAllFights() {
        const item = FightRepository.getAll()
        if (!item) {
            return null;
        }
        return item;
    }

    // TODO: Implement methods to work with user

    search(search) {
        const item = FightRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
    // OPTIONAL TODO: Implement methods to work with fights
}

module.exports = new FightersService();