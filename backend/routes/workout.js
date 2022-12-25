const express = require('express')
const {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//get
router.get('/', getAllWorkout)

//single get route
router.get('/:id', getOneWorkout)

//post - create
router.post('/', createWorkout)

//delete route
router.delete('/:id', deleteWorkout)

//patch route
router.patch('/:id', updateWorkout)

module.exports = router