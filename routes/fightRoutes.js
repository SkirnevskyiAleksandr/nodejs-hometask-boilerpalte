const { Router } = require('express');
const FightService = require('../services/fightService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');


const router = Router();
router.get('/api/fights', function (req, res) {
    let allFights = FightService.getAllFights()
    res.send(allFights)
})

router.post('/api/fights', function (req, res) {
    let addFight = FightService.addFight(req.body)
    res.send(addFight)
})

// OPTIONAL TODO: Implement route controller for fights

module.exports = router;