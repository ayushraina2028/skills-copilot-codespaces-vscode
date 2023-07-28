// create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// create express app
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// create mongodb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected to mongodb');
});

// create comment model
const Comment = mongoose.model('Comment', {
    title: String,
});