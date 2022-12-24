require('dotenv').config()
const express = require('express')

//app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to our app!'})
})

//listen
app.listen(process.env.PORT, () => {
    console.log('Listen port', process.env.PORT)
})