const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//Nadav, add ENV settings

http.listen(port, () => console.log(`Treller REST API listening on port ${port}!`))