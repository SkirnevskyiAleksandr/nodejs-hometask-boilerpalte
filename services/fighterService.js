const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    //GET /api/fighters
    getAllFighters() {
        const item = FighterRepository.getAll()
        if (!item) {
            return null;
        }
        return item;
    }

    //GET/api/fighters/id
    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    // POST /api/fighters
    addFighter(data) {
        const item = FighterRepository.create(data)
        if (!item) {
            return null;
        }
        return item
    }

    // PUT /api/fighters /: id
    updateFighters(id, dataToUpdate) {
        const item = FighterRepository.update(id, dataToUpdate)
        if (!item) {
            return null;
        }
        return item
    }

    // DELETE /api/fighters /: id
    dellFighter(id) {
        const item = FighterRepository.delete(id)
        if (!item) {
            return null;
        }
        return item
    }

    // TODO: Implement methods to work with fighters
}

module.exports = new FighterService();