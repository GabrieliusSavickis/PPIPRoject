const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.json())
// Allows anyone to access the data
app.use(cors());

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect("mongodb+srv://Ppi:Access@ppi.md1bby9.mongodb.net/test");
  // using await because database has authentication
}

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const collection = mongoose.model("collection", newSchema)

app.post("/", cors(), async (req, res) => {
  //Define two variables in object form
  const { email, password } = req.body
  try {
    //Check if the email already exists
    const checkEmail = await collection.findOne({ email })
    if (checkEmail) {
      res.json("emailExists")
    }
    else {
      res.json("emailNotExist")
    }
  }
  catch (event) {
    res.json("emailNotExist")

  }
})

app.post("/signup", cors(), async (req, res) => {

  //Define two variables in object form
  const { email, password } = req.body

  //Since we are creating new user here, we need to create a new object to store the data
  const data = {
    email: email,
    password: password
  }

  try {
    //Check if the email already exists
    const checkEmail = await collection.findOne({ email })
    if (checkEmail) {
      res.json("emailExists")
    }
    else {
      res.json("emailNotExist")
      //If email is not taken then it will be accepted and be stored in MongoDB
      await collection.insertMany([data])
    }
  }
  catch (event) {
    res.json("emailNotExist")

  }
})



//gets request for links
app.get('/F1', (req, res) => {
  res.send('Formula 1')
  //response ^^
})



//link to page datarep
app.get('/MotoGP', (req, res) => {
  res.send("Welcome to MOTOGP")
})

//linking to a sendfile response
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

//Listen to the main port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = collection