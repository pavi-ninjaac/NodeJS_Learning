const http = require('http');
//3ed party modules
const express = require('express');

const path = require('path');

const app = express(); // creating the object of the express function
//const ExpressHandlebars = require('express-handlebars');
const ejs = require('ejs');
//setting this template for the dynamic content display on the wep page
//
//app.set('view engine' , 'pug'); for bug engine
//set the views folder to see for the .pug files
//////app.engine('hbs' , ExpressHandlebars);
///app.set('view engine' , 'hbs'); //now hbs should be our extension
app.set('view engine' , 'ejs'); 
app.set('views' , 'views');
//path for the statis files in the project like .css and .js files .............which are not routes
app.use(express.static(path.join(__dirname , 'public')));
//importing the rountes from routes folder
const adminData = require('./routes/admin');
const ShopRoutes = require('./routes/shop');
//handle the responses using the routes

//to parse the body of the request form details
app.use(express.urlencoded({extended:false} ));

//filtering routes .....here all routes are come under the admin file /////easy to find and use
app.use('/admin',adminData.routes);//calling the imported routes

//put '/' route always at the end , else it take all the route request and send back the response by itself
app.use(ShopRoutes);

//add the 404 page at the last, if no other routes are found this will work
app.use((req , res , next ) => {
    //res.status(404).sendFile(path.join(__dirname , 'views' , '404.html'));
    res.status(404).render('404' , {PageTitle : 'Page Not Found'});
});

app.listen(5000);