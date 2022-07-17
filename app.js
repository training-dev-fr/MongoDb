const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const userRoutes = require('./routes/user.routes');
const postsRoutes = require('./routes/posts.routes');
const commentRoutes = require('./routes/comment.routes');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/user', userRoutes);
app.use('/post', postsRoutes);
app.use('/comment', commentRoutes);

module.exports = app;