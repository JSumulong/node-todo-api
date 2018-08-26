// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) { 
        return console.log("Unable to connect to Mongo DB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').find({ _id: new ObjectID("5b80a8411b99413f5a984183") }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find documents');
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log('Toddos count: ', count);
    // }, (err) => {
    //     console.log('Unable to find documents');
    // });

    db.collection('Users').find({ name: "Bruce Lee"}).count().then((count) => {
        console.log('Bruce Lee count: ', count);
    }, (err) => {
        console.log('Unable to find documents');
    });


    db.close();
});