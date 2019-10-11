const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SaleSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
    methodPag: {
        type: String,
        required: true        
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now
    },
    
});

SaleSchema.plugin(mongoosePaginate);

mongoose.model('Sale', SaleSchema);