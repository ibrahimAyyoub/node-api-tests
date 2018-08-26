//notice how we use desctrusting to get mongoClient and how we will get the ObjectId
//const MongoClient = require("mongodb").MongoClient;
const {MongoClient,ObjectID} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) =>{
    if(err){
        return console.log("Unable to connect to MongoDb server")
    }

    console.log("Connected to MongoDB server")
    //notice how we pass the same name of our database to the functoin below 
    const db = client.db("TodoApp")

    //how to fetch data(fetch is like reading data), we can look for things in the .find() arugment, by passing an object with key and value or we can find all things
    //by deafult and .find() returns a cursuor object, which has a lot of functions we can use, then we use.toArray() to conver all doucments to an array of objects, then it returns
    //a promise, that promise we use to access our docs
    db.collection("Todos").find({completed: true}).toArray().then((docs) =>{
        console.log("todos")
        console.log(JSON.stringify(docs,undefined,2))

    },(err) =>{
        if(err){
            console.log("cannt connect");
        }
    });

    //We're gona fetch the data again but this time using the ObjectID we destructured from very top code
    db.collection("Todos").find({
        _id: new ObjectID("5b7ef8c27690943218665d3d")
    }).toArray().then((docs) =>{
        console.log("todos")
        console.log(JSON.stringify(docs,undefined,2))

    },(err) =>{
        if(err){
            console.log("cannt connect");
        }
    });

    db.collection("Todos").find().count().then((count) =>{
        console.log(`Todos Count ${count}`);
 

    },(err) =>{
        if(err){
            console.log("cannt connect");
        }
    });

    db.collection("Users").find({username: "Ibrahim"}).toArray().then(docs =>{

        console.log(JSON.stringify(docs,undefined,2));

    }, err =>{
        if(err){
            console.log("error");
        }
    })
    
    //always use .close() to close the file other wise the terminal wont close
    //client.close();
});