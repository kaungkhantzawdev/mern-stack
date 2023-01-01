const Workout = require('../models/WorkOutModel')
const mongoose = require('mongoose')

//get all workout
const getAllWorkout = async (req, res) => {
    const user_id = req.user._id
    let workout = await Workout.find({ user_id }).sort({ createdAt: -1 })
    res.json({ 
        msg: "This is all workout",
        user_id,
        data: workout
    })
}

//get single workout
const getOneWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ msg: "invalid id"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        res.status(404).json({ msg: "No workout"})
    }
    res.json({ 
        msg: `This is single route ${req.params.id}`,
        data: workout
    })
}

//create workout
const createWorkout = async (req, res) => {

    const { title, qua, load } = req.body

    try{
        const user_id = req.user._id
        let workout = await Workout.create({ title, qua, load, user_id })
        res.status(200).json({ 
            msg: 'Successfully created',
            data: workout
        })
    } catch( error ) {
        console.log(error)
        res.status(500).json({ msg: `this is error ${error}` })
    }
}

//delete workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ msg: "invalid id"})
    }

    const workout = await Workout.findByIdAndDelete(id)

    if(!workout){
        res.status(404).json({ msg: "No workout"})
    }
    res.json({ 
        msg: `deleted ${req.params.id}`,
        data: workout
    })
}

//update workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({ msg: "invalid id"})
    }

    const workout = await Workout.findByIdAndUpdate(id, {
        ...req.body
    })

    if(!workout){
        res.status(404).json({ msg: "No workout"})
    }
    res.json({ 
        msg: `deleted ${req.params.id}`,
        data: workout
    })
}

//export

module.exports = {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}