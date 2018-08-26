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


    //to create a collection in the database , use db.collection("#nameOfCollectionHere")
    //then use whatever methods u want, for now we want to insert data to the collection so we use .insertOne({}); 
    //which takes an object and u can use it
    db.collection("Todos").insertOne({
        text: "something to do",
        completed: true
    }, (err,result) =>{
        if(err){
            return console.log("Unable to insert todo");
        }

        //result.ops is an array of all the doucments that got inserteed
        console.log(JSON.stringify(result.ops,undefined,2));

    });

    db.collection("Users").insertOne({
        username: "Ibrahim",
        age: 19,
        location: "Canada"
    },(err,result) =>{
      if(err){
          return console.log("Unable to write doucment");
      }
      
      //result.ops is an array of all the doucments that got inserteed
      console.log(result.ops[0]._id.getTimestamp());  
    })
    //always use .close() to add and save infromation to the database then close the file
    client.close();
});