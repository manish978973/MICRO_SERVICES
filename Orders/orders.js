    // load express 
    const express = require('express');
    const app = express();
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');
    const axios = require('axios');

    app.use(bodyParser.json());

    mongoose.connect('mongodb+srv://manu:WAX8dVKpHJwwl5JN@microservicejavascript-uvn3g.mongodb.net/order?retryWrites=true&w=majority')
    .then(()=>{
        console.log('DB Connected');
    });


    const Order = require('./Order');   
    app.use((req,res,next)=>{

        res.setHeader('Access-Control-Allow-Origin',"*");
        res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
        res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
        next();
        });

    app.post('/order',(req,res)=>{
        
        const order = new Order({CustomerID:mongoose.Types.ObjectId(req.body.customerid),BookID:mongoose.Types.ObjectId(req.body.bookid),InitialDate:req.body.inidate,DeliveryDate:req.body.deldate})
        order.save().then(()=>{
            console.log('Order saved successfully in database')
           
        }).catch((err)=>{
            console.log('error in saving order')
        })

        res.send("Success")
       })



       app.get('/orders',(req,res)=>{
        Order.find().then((orders)=>{
            res.json(orders)
        }).catch((err)=>{
            console.log(error)
        })
    })


    app.get('/orders/:id',(req,res)=>{
        Order.findById(req.params.id).then((order)=>{
            if(order) {

                
               // let repo = {"CustomerID":"","BookID":"","IniDate":order.InitialDate,"DelDate":order.DeliveryDate}
               // console.log("repo is " + repo)
                axios.get(`http://localhost:5555/customers/${order.CustomerID}`).then((customer)=>{

                    axios.get(`http://localhost:4545/books/${order.BookID}`).then((book)=>{

                        let repo = {"OrderID":order._id,"Customername":customer.data.name,"Bookname":book.data.title,"IniDate":order.InitialDate,"DelDate":order.DeliveryDate}
                        res.json(repo);

                    })
                   
                })
              
                //res.json(repo);
            
            } 
            else { res.sendStatus(404) }
            
        }).catch((err)=>{
            console.log('No order with given id')
        })

       // res.send("This is our Books main end points");
    })


    app.delete('/order/:id',(req,res)=>{
        Order.findOneAndRemove(req.params.id).then(()=>{
            res.send("order removed successfully")
        }).catch(()=>{
            res.send("unable to remove the order")
            
        })
    })

    app.listen(7777,()=>{
        console.log('Orders express server is up and running successfully');
    })