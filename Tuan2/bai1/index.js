const DatabaseSingleton = require('./singleton/DatabaseSingleton')

const db1 = new DatabaseSingleton('mysql')
db1.connect()

const db2 = new DatabaseSingleton('mongo')
db2.connect()

console.log('db1 === db2:', db1 === db2)
