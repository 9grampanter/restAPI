const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(bodyParser.json());
// app.use(express.json()); 
// app.use(express.urlencoded());

// Middlewares
// app.use('/posts', () => {
//   console.log('This is a middleware running');
// });



// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);



// Routes
app.get('/', (req, res) => {
  res.send('We are on home');
});



// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => {
    console.log('Connected to DB!');
  }
);


// Listen to server. "listen(3000)" means, listen to port 3000
app.listen(3000);