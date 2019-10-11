const mongoose = require('mongoose');

const Sale = mongoose.model('Sale');

module.exports = {
    async index(req, res){
        const { page=1 } = req.query;
        const sales = await Sale.paginate({}, {page, limit: 10}); 
        return res.json(sales)
    },

    async show(req, res){
        const sale = await Sale.findById(req.params.id);
        return res.json(sale); 
    }, 

    async store(req, res){
        const sale = await Sale.create(req, body); 
        return res.json(sale); 
    },

    async update(req, res){
        const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(sale); 
    },

    async destroy(req, res){
        await Sale.findByIdAndRemove(req.params.id); 
        return res.send(); 
    }

};