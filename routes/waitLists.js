const express = require('express');
const router = express.Router();
const ash = require('express-async-handler');
const WaitList = require('../models/waitList');


router.get('/', ash(async (req, res) => {
    const waitList = await WaitList.find();

    res.json(waitList);
}));

router.delete('/', ash(async (req, res) => {
    const result = await WaitList.deleteMany();
    res.send(result);
}));

module.exports = router;