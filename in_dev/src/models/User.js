const mongoose = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate'); 
const bcrypt = require('bcryptjs'); 

const UserSchema = new mongoose.Schema({
    userCode: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        default: null,
    }, 
    password: {
        type: String, 
        required: true,
        default: null,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    },  
    operator: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10); 
    this.password = hash;
    next(); 
})

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema); 