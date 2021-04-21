const express  = require('express');
const path = require('path');
const routes = express.Router();

const rootdir = require('../util(helper)/path');

const adminData = require('./admin');

routes.get('/' , (req , res , next) => {
    //res.sendFile(path.join(__dirname , '..' , 'views' , 'add-product.html'));
    //use istead of the above
    
    //console.log('shop.js' , adminData.products);
    //res.sendFile(path.join(rootdir, 'views' , 'shop.html'))
    //instead of above 
    //returning the pug engine
    const products = adminData.products;
    //pass the entered item
    res.render(
        'shop' , 
        {prods : products , 
            PageTitle : 'SHOP',
            path : '/' });
});

module.exports = routes;