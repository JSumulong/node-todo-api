var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        // console.log("document created", doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send("ID not valid");
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.send('Oops, unable to find todo');
        }
        res.send(todo);
    }, (e) => {
        res.status(404).send(e.message);
    });
});

app.listen(3000, () => {
    console.log('started on port 3000');
});

module.exports = {app};
