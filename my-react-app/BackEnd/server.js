const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//gets request for links
app.get('/F1', (req, res) => {
  res.send('Formula 1')
  //response ^^
})

//link to page datarep
app.get('/MotoGP', (req, res)=>{
    res.send("Welcome to MOTOGP")
})

//linking to a sendfile response
app.get('/test', (req, res)=>{
  res.sendFile(__dirname+'/index.html')
})

// get the server up and running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})