const express  = require('express');
const path = require('path');
const routes = express.Router();

const rootdir = require('../util(helper)/path');

routes.get('/' , (req , res , next) => {
    //res.sendFile(path.join(__dirname , '..' , 'views' , 'add-product.html'));
    //use istead of the above
    res.sendFile(path.join(rootdir, 'views' , 'shop.html'))
    
});

module.exports = routes;