const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date, 
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Product', ProductSchema);