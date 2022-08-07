const path = require('path');
const express = require('express');
const transporter = require('./config');
// const dotenv = require('dotenv').config();
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const cors = require("cors")
const bodyParser = require('body-parser'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.use(cors({
//   origin: "127.0.0.1:3000",
//   credentials: true,
//   methods:["GET","POST"]
// }));


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*')
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	next();
// })

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'https://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.post('/', (req, res) => {
  console.log(process.env.email)
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: 'abdullahjadoon75@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(`Error: ${err.message}`)
        console.log(`${process.env.email} || ${process.env.password}`)
        res.status(500).send({
          success: false,
          // message: 'Something went wrong. Try again later'
          message: `$SendMail-Error-${err.message}`
        });
      } else {
        console.log('Mail API called')
        res.send({
          success: true,
          message: 'Thank for contacting us.your message have been received'
          
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      // message: 'Something went wrong. Try again later'
      message: `TryCatch - ${error.message}`
    });
  }
  
});

app.listen(process.env.port||3500, () => {
  console.log(process.env.port);
});