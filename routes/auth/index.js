const express = require('express');

const router = express.Router();

const User = require('../../lib/user');

router.post('/signup', (req, res, next) => {
    User.createUser({username: 'myuser2', email: 'myuser2@gmail.com', password: '1234'}, (err, result) => {
        if (err) {
            next(err);
            return;
        }
        res.json({data: 'success'})
    })
})

module.exports = router;