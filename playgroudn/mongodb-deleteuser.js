const {MongoClient,ObjectID} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) =>{
    if(err){
        return console.log("Unable to connect to MongoDb server")
    }

    console.log("Connected to MongoDB server")
    //notice how we pass the same name of our database to the functoin below 
    const db = client.db("TodoApp")

    db.collection("Users").insertOne({username: "Ibrahimss"});
  
    db.collection("Users").deleteMany({username: "Ibrahim"}).then((info)=>{
      
        console.log(info);
    })

    db.collection("Users").findOneAndDelete({_id: new ObjectID("5b83272caee527667535a24b")}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    })

    db.collection("Todos").insertOne({eatLunch: false});
  

    //always use .close() to close the file other wise the terminal wont close
    //client.close();
});
   