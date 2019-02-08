const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('movies')
    },
    getById(id) {
        return database('movies').where('id', id)
    },
    createMovie(newMovie) {
        return database('movies').insert(newMovie).returning('*')
    },
    deleteMovie(id) {
        return database('movies').where('id', id).delete()
    },
    updateMovie(id, body) {
        return database('movies').where('id', id).update(body).returning('*')
    }
}