const Database = require('better-sqlite3')

const db = new Database('locations.db')

const rows = db.prepare('SELECT * FROM locations').all()
console.log(rows)
