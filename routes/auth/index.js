const express = require('express');
const bodyParser = require('body-parser');

const User = require('../../lib/user');

const router = express.Router();
router.use(bodyParser.json());

router.post('/signup', (req, res, next) => {
    console.log(req.body)
    User.createUser(req.body, (err, result) => {
        if (err) {
            next(err);
            return;
        }
        res.json(result)
    })
})

module.exports = router;