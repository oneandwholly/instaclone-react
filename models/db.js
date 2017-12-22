const mysql = require('mysql')
const config = require('../config');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : config.mysql_host,
    user            : config.mysql_user,
    password        : config.mysql_password,
    database        : config.mysql_database,
    multipleStatements: true
});

module.exports = pool;

