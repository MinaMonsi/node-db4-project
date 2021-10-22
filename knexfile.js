// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //required by sqlite
    connection: {
      filename: './data/cook_book.db3'
    },
    migrations: {
        directory: './data/migrations'
    },
    seeds: {
        directory: '.data/seeds'
    },
    pool:{
        afterCreate:(conn,done)=>{
            conn.run("PRAGMA foreign_keys = ON",done)
        }
    }
  },
};