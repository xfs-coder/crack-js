const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// 支持解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// 支持解析 application/json
// app.use(bodyParser.json())

const crypto = require('./crypto')

app.get('/md5', (req, res)=>{
    var {city} = req.query
    res.send({result: crypto.md5(JSON.stringify(city))})
})

app.post('/encode', (req, res)=>{
    res.send({result: crypto.encode(JSON.stringify(req.body))})
})

app.listen(9090, ()=>{
    console.log("server start ", 9090)
})
