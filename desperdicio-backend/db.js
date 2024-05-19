const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'srv848.hstgr.io',
    user: 'u343496947_root',
    password: 'u343496947_Rootpass',
    database: 'u343496947_semdesperdicio'
})


module.exports = mysqlPool