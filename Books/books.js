    // load express 
    const express = require('express');
    const app = express();
    const mongoose = require('mongoose');
    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
    
    const Book = require('./Book');
    mongoose.connect('mongodb+srv://manu:WAX8dVKpHJwwl5JN@microservicejavascript-uvn3g.mongodb.net/test?retryWrites=true&w=majority')
    .then(()=>{
        console.log('DB Connected');
    });

    app.use((req,res,next)=>{

        res.setHeader('Access-Control-Allow-Origin',"*");
        res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
        res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
        next();
        });

  
    app.get('/',(req,res)=>{
        res.send("This is our Books main end points");
    })

    app.get('/books/:id',(req,res)=>{
        Book.findById(req.params.id).then((book)=>{
            if(book) {res.json(book)} 
            else { res.sendStatus(404) }
            
        }).catch((err)=>{
            console.log('No book with given id')
        })

       // res.send("This is our Books main end points");
    })

    app.get('/books',(req,res)=>{
        Book.find().then((books)=>{
            res.json(books)
        }).catch((err)=>{
            console.log(error)
        })
    })

    app.post('/book',(req,res)=>{
        
         const book = new Book({title:req.body.title,author:req.body.author,numberPages:req.body.nopages,publisher:req.body.publisher})
         book.save().then(()=>{
             console.log('Book saved successfully in database')
            
         }).catch((err)=>{
             console.log('error in saving')
         })

         res.send("Success")
        })



        app.delete('/book/:id',(req,res)=>{
            Book.findOneAndRemove(req.params.id).then(()=>{
                res.send("Book removed successfully")
            }).catch(()=>{
                res.send("unable to remove the book")
                
            })
        })
    
        app.listen(4545,()=>{
        console.log('Books express server is up and running successfully');
    })


    
    //WAX8dVKpHJwwl5JN

    //manu    