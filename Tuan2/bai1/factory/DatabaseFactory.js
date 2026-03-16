const MySQLDatabase = require('../database/MySQLDatabase')
const MongoDatabase = require('../database/MongoDatabase')

class DatabaseFactory {
  static createDatabase(type) {
    switch (type) {
      case 'mysql':
        return new MySQLDatabase()
      case 'mongo':
        return new MongoDatabase()
      default:
        throw new Error('Loại Database không được hỗ trợ')
    }
  }
}

module.exports = DatabaseFactory
