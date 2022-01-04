const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();
// GET / api / fighters
router.get('', function (req, res) {
    let allFighters = FighterService.getAllFighters()
    res.send(allFighters)
})

//GET / api / fighters /: id
router.get('', function (req, res) {
    let oneFighter = FighterService.search(
        function (element) {
            if (element.id == req.params.id) {
                return element
            }
        })
    res.send(oneFighter)
})

// POST / api / fighters
router.post('', function (req, res) {
    let addFighter = FighterService.addFighter(req.body)
    res.send(addFighter)
})

//PUT /api/fighters /: id
router.put('/:id', function (req, res) {

    let oneFighter = FighterService.search(
        function (element) {
            if (element.id == req.params.id) {
                return element
            }
        })
    let updFighter = FighterService.updateFighters(req.params.id, oneFighter)
    res.send(updFighter)

    //DELETE /api/fighter/:id
    router.delete('/:id', function (req, res) {
        let dellFighter = FighterService.dellFighter(req.params.id)
        res.send(dellFighter)
    })

})
// TODO: Implement route controllers for fighter

module.exports = router;