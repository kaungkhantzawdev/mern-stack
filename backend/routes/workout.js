const express = require('express')
const {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

//require authentication
router.use(requireAuth)

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