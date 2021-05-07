
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongodb =require('mongodb');
var cors = require("cors");
const MongoClient= mongodb.MongoClient;
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
let _db;
let dbn='form'
    MongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true })
    .then(client=>{
        console.log('connected');
       _db=client.db(dbn);
       console.log('Connected MongoDB')
       console.log(`Database: ${dbn}`)

    })
    .catch(err=>{
        console.log(err)
        throw err;

    })


    app.post('/',(req,res)=>
    {
   if(req){
    
        var data = [{ firstName: req.body.firstName,
            lastName: req.body.lastName,
            city:req.body.city,
            email: req.body.email,
            password: req.body.password }];
    
        }
        res.send('succesfully stored in db');
    _db.collection("shashank").insertMany(data,function(err,res){
        if(err) throw err;
        else
        console.log("success")
        }); 

        
    
    }); 

    app.get('/view',(req,res)=>
    {
        _db.collection("shashank").find({}).toArray((err,result)=>{
            if(err) 
                throw(err);
            
            else
            console.log(result);
                res.send(result);
        
        });

        
    
    }); 
    



app.listen(8000,()=>console.log('server started'));
