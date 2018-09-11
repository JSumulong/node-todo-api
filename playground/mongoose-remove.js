const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// removes and returns document
// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove({})

Todo.findById('5b95607e786ddf30b36d139a').then((todo) => {
    console.log(todo);
});