const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: 'string',
        required: [true, "please add the user name"],
    },
    email: {
        type: 'string',
        required: [true, "please add the user email"],
    },
    password: {
        type: 'string',
        required: [true, "please add the user password"],
    },
},
{
    timstamps: true,
});

module.exports = mongoose.model('User',userSchema);