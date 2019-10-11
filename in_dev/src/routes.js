const express = require('express');

const authMiddleware = require('./middlewares/auth');
 
const routes = express.Router(); 
 //////////////////////////////////////

const ProductController = require('./controllers/ProductController');

const UserController = require('./controllers/UserController');

const SaleController = require('./controllers/SaleController');

const AuthController = require('./controllers/AuthController'); 

const RegisterController = require('./controllers/RegisterController'); 
//////////////////////////////////////

// /routes.use(authMiddleware);

//Product Routes 

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy); 

//User Routes 

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

//Sale Routes
routes.get('/sales', SaleController.index); 
routes.get('/sales/:id', SaleController.show); 
routes.post('/sales', SaleController.store); 
routes.put('/sales/:id', SaleController.update); 
routes.delete('/sales/:id', SaleController.destroy); 

// Authentication Route
routes.post('/auth', AuthController.auth); 

// Register Route 
routes.post('/register', RegisterController.register); 

// Route Exports 
module.exports = routes;