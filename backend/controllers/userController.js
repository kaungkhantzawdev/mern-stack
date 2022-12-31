const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECERT_KEY, {expiresIn: '3d'});
}
// register 
const register = async (req, res) => {

    const { email, password } = req.body

    try{

        const user = await User.register( email, password )

        // create token 
        const token = createToken(user._id)

       return res.status(200).json({
            email,
            token
        })
        
    }catch (error) {
       return res.status(400).json({ msg: error.message })
    }

}

// login 
const login = async (req, res) => {
    const { email, password } = req.body

    try{

        const user = await User.login( email, password )

        // create token 
        const token = createToken(user._id)

       return res.status(200).json({
            email,
            token
        })
        
    }catch (error) {
       return res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    register,
    login
}