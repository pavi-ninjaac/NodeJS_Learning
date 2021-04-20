const express  = require('express');
const path = require('path');

//import the user function
const rootdir = require('../util(helper)/path');
const routes = express.Router();

//   /admin/add-product
routes.use('/add-product' , (req , res , next) => {
    //res.sendFile(path.join(__dirname , '..' , 'views' , 'add-product.html'));
    //use istead of the above
    res.sendFile(path.join(rootdir, 'views' , 'add-product.html'));
});

//called as /admin/product
routes.post('/product' , (req , res , next) => {

    console.log(req.body);
    res.redirect('/');
    
});

module.exports = routes;