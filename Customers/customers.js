    // load express 
    const express = require('express');
    const app = express();
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    
    app.use(bodyParser.json());

    mongoose.connect('mongodb+srv://manu:JQAJgEDe0j7tMtth@cluster0-iz8n0.mongodb.net/customer?retryWrites=true&w=majority').then(()=>{
      console.log('connected to Database');
   })
   .catch(()=>{
    console.log('Connection failed');
    });

    const Customer = require('./Customer');

    app.use((req,res,next)=>{

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Accept', 'application/json');
        //res.setHeader("Access-Control-Allow-Origin: http://localhost:3000");

        res.setHeader('Access-Control-Allow-Origin',"*");
        res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
        res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
        next();
        });


    app.post('/customer',(req,res)=>{
        
        const customer = new Customer({name:req.body.name,age:req.body.age,address:req.body.address})
        customer.save().then(()=>{
            console.log('Customer saved successfully in database')
           
        }).catch((err)=>{
            console.log('error in saving customer')
        })

        res.send("Success")
       })



       app.get('/customers',(req,res)=>{
        Customer.find().then((customers)=>{
            res.json(customers)
        }).catch((err)=>{
            console.log(error)
        })
    })


    app.get('/customers/:id',(req,res)=>{
        Customer.findById(req.params.id).then((customer)=>{
            if(customer) {res.json(customer)} 
            else { res.sendStatus(404) }
            
        }).catch((err)=>{
            console.log('No Customer with given id')
        })

       // res.send("This is our Books main end points");
    })


    app.delete('/customer/:id',(req,res)=>{
        Customer.findOneAndRemove(req.params.id).then(()=>{
            res.send("Customer removed successfully")
        }).catch(()=>{
            res.send("unable to remove the Customer")
            
        })
    })



    app.listen(5555,()=>{
        console.log('Customer express server is up and running successfully');
    })