const express = require("express");
const bodyParser = require("body-parser");
const Post = require('./models/post');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://makio:Y3Yc3fn9qOLWH0pz@cluster0-3z7by.mongodb.net/node-angular?retryWrites=true')
.then(()=>{
  console.log('Conectado a la Base de Datos');
})
.catch(()=>{
  console.log('No se pudo conectar a la Base de Datos');
});

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
//makio  -
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    songs: req.body.songs,
    date: req.body.date

  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: "Post deleted!"});
  })
});

});

module.exports = app;
