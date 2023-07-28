// Create web server
// 1. create web server
// 2. create router
// 3. create router handler
// 4. create router middleware
// 5. create router handler function
// 6. create router middleware function

// 1. create web server
const express = require('express');
const app = express();

// 2. create router
const comments = require('./routes/comments');

// 3. create router handler
app.use('/comments', comments);

// 4. create router middleware
app.use((req, res, next) => {
  res.status(404).send('404 Page Not Found');
});

// 5. create router handler function
// 6. create router middleware function

module.exports = app;

// Path: comments.js