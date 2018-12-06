const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
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