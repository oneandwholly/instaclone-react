const pool = require('./db');

const create = (data, cb) => {
    pool.query('INSERT INTO `user` SET ?', data, (err, res) => {
        if (err) {
            cb(err);
            return;
        }
        read(res.insertId, cb);
    });
}

const read = (id, cb) => {
    pool.query('SELECT * FROM `user` WHERE `id` = ?', id, (err, results) => {
        if (!err && !results.length) {
            err = {
                code: 404,
                message: 'Not found'
            };
        }

        if (err) {
            cb(err);
            return;
        }

        cb(null, results[0]);
    });
}

module.exports = {
    create,
    read,
}