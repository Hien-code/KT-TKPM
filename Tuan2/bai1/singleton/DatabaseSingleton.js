const DatabaseFactory = require('../factory/DatabaseFactory')

class DatabaseSingleton {
  static instance = null

  constructor(type) {
    if (DatabaseSingleton.instance) {
      return DatabaseSingleton.instance
    }

    this.database = DatabaseFactory.createDatabase(type)
    DatabaseSingleton.instance = this
  }

  connect() {
    this.database.connect()
  }
}

module.exports = DatabaseSingleton
