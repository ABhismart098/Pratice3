const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: "http://localhost:8082"
};



// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router

const router = require('./Routes/contact_form_route.js')
app.use('./api/contact_form',router)


// Testing API
app.get('/', (req, res) => {
  res.json({ message: 'hello first API' });
});

// Port
const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
