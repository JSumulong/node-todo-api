const { MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log("Unable to connect to MongoDB server");
    }

    console.log('connected to server');

    // db.collection('Todos').findOneAndUpdate(
    //     { _id: new ObjectID('5b82ea5ba200289f9f49638a')},
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5b80aaf45316263fb6ebc175')
        },
        {
            $set: {
                name: 'Jon'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then(result => {
        console.log(result);
    });

    // db.close();

});