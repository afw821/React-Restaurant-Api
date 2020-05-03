const Table = require('../models/table');
const express = require('express');
const router = express.Router();
const ash = require('express-async-handler');
const WaitList = require('../models/waitList');

router.post('/', ash(async (req, res) => {
    const { name, email, phoneNumber } = req.body;
    console.log('req body', req.body);
    const count = await Table.countDocuments();
    console.log('count', count);
    if (count < 6) {
        let table = new Table({
            name: name,
            email: email,
            phoneNumber: phoneNumber
        });

        await table.save();
        res.json(table);
    } else {
        //push it to the waiting list
        let waitList = new WaitList({
            name: name,
            email: email,
            phoneNumber: phoneNumber
        });

        await waitList.save();
        res.json(waitList);
    }

}));

router.get('/', ash(async (req, res) => {
    const tables = await Table.find();

    res.json(tables);
}));

module.exports = router;