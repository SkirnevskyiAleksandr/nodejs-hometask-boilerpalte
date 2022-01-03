const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('', function (req, res) {
    let allFighters = FighterService.getAllFighters()
    res.send(allFighters)
})

router.post('', function (req, res) {
    let addFighter = FighterService.addFighter(req.body)
    res.send(addFighter)
})
// TODO: Implement route controllers for fighter

module.exports = router;