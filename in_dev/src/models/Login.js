const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate'); 

const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    }, 
    password: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User'
    }
});

LoginSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Login', LoginSchema); 