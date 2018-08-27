const {MongoClient,ObjectID} = require("mongodb");




MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client) =>{
    if(err){
        return console.log("Unable to connect to MongoDb server")
    }

    console.log("Connected to MongoDB server")
    //notice how we pass the same name of our database to the functoin below 
    const db = client.db("TodoApp")

    //how to update a doucment in the DATABASE
    //use findOneAndUpdate. it takes 4 arugments as,
    //first one is the filter, the thing u want to update(the docueent u want to update, so u find it first)
    //second is the actual update u want to make, using the update operators on mongodb, so $set will set all the things in that doucment to whatever you want
    //third arugment is an optionals arugment, wether uwant the original document to be returned, sometimes u do or u dont so u set it to boolean as what u want
   db.collection("Todos").findOneAndUpdate({
       _id: new ObjectID("5b833dc7ad5a4f4158cdd7e9")
   },{
       $set:{
           completed: true
       }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result);
   })


   db.collection("Users").findOneAndUpdate({
       _id: new ObjectID("5b83423ba7a8361404c484a3")
   },{
       $set:{
           name: "Ibrahim"
       },
       $inc:{
           age :-50
       }
   },{
       returnOriginal: false
   }).then((result)=>{
       console.log(result);
   })
  

    //always use .close() to close the file other wise the terminal wont close
    //client.close();
});
   