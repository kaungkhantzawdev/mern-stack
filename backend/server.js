require('dotenv').config()
const express = require('express')

//router
const WorkoutRoutes = require('./routes/workout')
const UserRoutes = require('./routes/user')

const mongoose = require('mongoose')
const cors = require('cors')
//app
const app = express()

//middleware 
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes workout
app.use('/api/workout', WorkoutRoutes)

//user
app.use('/api/auth', UserRoutes )


//listen
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected with mongoDB ,Listen port', process.env.PORT)
        })
    })
    .catch(err => {
        console.log(err)
    })
