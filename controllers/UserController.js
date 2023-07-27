const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

//@desc Register the user
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler( async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error(" All fields are madatory");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User Already Registered");

    }

    // Hash Password
    const hashedPaasword = await bcrypt.hash(password,10);
    console.log("hashed password: ", hashedPaasword);

    const user = await User.create({
        username,
        email,
        password: hashedPaasword
    });

    console.log(`user created ${user}`);

    if(user){
        res.status(201).json({_id: user._id, email: user.email});
    }else{
        res.send(400);
        throw new Error("User data not valid");
    }
    res.json({message: "Register the user!"});
});

//@desc Login  user
//@route GET /api/users/login
//@access public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message: "Login user!"});
});

//@desc Current  user
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler( async (req, res) => {
    res.json({message: "Current user information!"});
});


module.exports = {
    registerUser, 
    loginUser,
    currentUser
};