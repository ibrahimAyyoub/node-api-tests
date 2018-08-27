const {MongoClient,ObjectID} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) =>{
    if(err){
        return console.log("Unable to connect to MongoDb server")
    }

    console.log("Connected to MongoDB server")
    //notice how we pass the same name of our database to the functoin below 
    const db = client.db("TodoApp")

    //deleteMany function, deletes mutiple items,
    db.collection("Todos").deleteMany({text: "something to do"}).then((result)=> {
        console.log(result);
    });

    //deleteOne deletes only one item in db.
    db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result)=>{

        console.log(result);
    });


    //findOneAndDelete find the object u want deleted and returns back in database
    db.collection("Todos").findOneAndDelete({how :"lol"}).then((result)=>{
    
        console.log(result);
        
    });

    //always use .close() to close the file other wise the terminal wont close
    //client.close();
});
   