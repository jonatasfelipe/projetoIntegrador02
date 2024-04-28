const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10702617',
    password: 'eIiXpWQWd7',
    database: 'sql10702617'
})


module.exports = mysqlPool