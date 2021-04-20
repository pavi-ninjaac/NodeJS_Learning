const http = require('http');
//3ed party modules
const express = require('express');

const path = require('path');

const app = express(); // creating the object of the express function

//path for the statis files in the project like .css and .js files .............which are not routes
app.use(express.static(path.join(__dirname , 'public')));
//importing the rountes from routes folder
const adminRoute = require('./routes/admin');
const ShopRoutes = require('./routes/shop');
//handle the responses using the routes

//to parse the body of the request form details
app.use(express.urlencoded());

//filtering routes .....here all routes are come under the admin file /////easy to find and use
app.use('/admin',adminRoute);//calling the imported routes

//put '/' route always at the end , else it take all the route request and send back the response by itself
app.use(ShopRoutes);

//add the 404 page at the last, if no other routes are found this will work
app.use((req , res , next ) => {
    res.status(404).sendFile(path.join(__dirname , 'views' , '404.html'));
});

app.listen(3000);