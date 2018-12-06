const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const queries = require('./queries');
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.listen(port, () => {
    console.log('listening on port: ', port);
})
app.get('/', (req, res) => {
    queries.listAll().then(movies => res.send(movies))
})
app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(movies => res.send(movies))
})
app.post('/', (req, res) => {
    queries.createMovie(req.body).then(movies => res.send(movies[0]))
})
app.put('/:id', (req, res) => {
    queries.updateMovie(req.params.id, req.body).then(movies => res.send(movies))
})
app.delete('/:id', (req, res) => {
    queries.deleteMovie(re.params.id).then(res.sendStatus(204))
})