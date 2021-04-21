const express  = require('express');
const path = require('path');



//import the user function
const rootdir = require('../util(helper)/path');
const router = express.Router();

const products = [];
//   /admin/add-product
router.use('/add-product' , (req , res , next) => {
    //res.sendFile(path.join(__dirname , '..' , 'views' , 'add-product.html'));
    //use istead of the above
    //res.sendFile(path.join(rootdir, 'views' , 'add-product.html'));
    res.render('add-product' , {PageTitle: 'Add Product',
                                path : '/admin/add-product'});
});

//called as /admin/product
router.post('/product' , (req , res , next) => {
    products.push({'title' : req.body.title});
    
    res.redirect('/');
    
});

exports.routes = router;
exports.products = products;
