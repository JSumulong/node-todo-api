const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b91cf389831de0e1d13c28111';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then(todos => console.log("Todos: ", todos));

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log("Todo: ", todo)
// });

// Todo.findById(id)
//     .then(todo => {
//         if (!todo) {
//             return console.log('ID not found');
//         }
//         console.log('Todo by ID: ', todo)
//     })
//     .catch((e) => {
//         console.log(e);
//     });


/* Challenge: 
    query the user collection
    use user.findById to find user
    handle no user found, user found, and error
*/

let id = "5b91d59a4df717091ff0fede";

User.findById(id).then(user => {
    if (!user) return console.log('User not found');
    console.log("User found: ", user);
}).catch(e => {
    console.log('There was an error: ', e.message);
});