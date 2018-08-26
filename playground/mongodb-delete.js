const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log("Unable to connect to MongoDB server");
    }

    console.log('connected to server');

    // delete many
    // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch'} ).then((result) => {
    //     console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    // challenge 
    // db.collection('Users').deleteMany({ name: 'Bruce Lee' }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b80ad088c41eb3fe565fc58')}).then((result) => {
        console.log(result);
    });

    // db.close();

});