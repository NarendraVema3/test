const express = require( 'express' );

const bodyParser = require("body-parser");

const mongoose = require('mongoose')

const Post = require('./model/post');


const app = express();


mongoose.connect("mongodb+srv://narendra:2sHVa1fYn7V86xRM@cluster0-5mm8v.mongodb.net/test?retryWrites=true")
.then(()=>{
  console.log('connected to database!');
})
.catch(()=>{
  console.log('connection failed');
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// app.use(( req,res,next )=>{

//     console.log("hello i am form the first middleware");
//     next();

// });

// app.use( (req,res,next) =>{

//     // res.send('hello from express');
//     console.log('i am from send middleware');
//    next()
// } );

app.get("/api/getprojects", (req, res, next) => {
    const posts = [
      {
        id: "1",
        title: "TMS",
        content: "Timesheet management"
      },
      {
        id: "2",
        title: "RTT",
        content: "Courier transport management System"
      }
    ];
    res.status(200).json({
      message: 'get the project details succesfully!',
      posts: posts
    });
  });

  app.get("/api/timesheet", (req, res, next) => {
    const posts = [
      {
        id: "1",
        title: "timesheet-narendra",
        content: "submitted details"
      },
      {
        id: "2",
        title: "timesheet-dharma",
        content: "Submitted details"
      }
    ];
    res.status(200).json({
      message: 'get the timesheet details succesfully!',
      posts: posts
    });
  });

  app.get("/api/resources", (req, res, next) => {
    const posts = [
      {
        id: "1",
        title: "timesheet-narendra",
        content: "submitted details"
      },
      {
        id: "2",
        title: "timesheet-dharma",
        content: "Submitted details"
      }
    ];
    res.status(200).json({
      message: 'get the timesheet details succesfully!',
      posts: posts
    });
  });

  app.get("/api/calendar", (req, res, next) => {
    const posts = [
      {
        id: "1",
        title: "timesheet-narendra",
        content: "submitted details"
      },
      {
        id: "2",
        title: "timesheet-dharma",
        content: "Submitted details"
      }
    ];
    res.status(200).json({
      message: 'get the timesheet details succesfully!',
      posts: posts
    });
  });




  // app.post("/api/projects",(res,req,next)=>{

  //    const post = new Post({
  //     // projectname:req.body.projectname,
  //     // projectdesc:req.body.projectdesc,
  //     // clientname:req.body.clientname,
  //     // projectmanager:req.body.projectmanager,
  //     // projectcost:req.body.projectcost
  //    })

  //     //  const post =   req.body;
  //      post.save();
  //      console.log(post);
  //     res.status(200).json({
  //       message: 'post added sucessfully',
  //       posts: posts
  //     });
  // });

  app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
});




  app.post("/api/timesheet",(res,req,next)=>{
    const post =   req.body;

    console.log(post);
});

app.post("/api/resources",(res,req,next)=>{
  const post =   req.body;

  console.log(post);
});

app.post("/api/client",(res,req,next)=>{
  const post =   req.body;

  console.log(post);
});

app.post("/api/calendar",(res,req,next)=>{
  const post =   req.body;

  console.log(post);
});




module.exports = app;