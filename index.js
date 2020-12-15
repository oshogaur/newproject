//initializing express
const express = require('express');
const app = express();
//including that courses file in our page
const courses = require('./courses');
//use function is used to include that function in our page
app.use('/courses',courses);

//routing 
app.get('/',function(req,res){

    res.send("welcome to my website");

});

app.listen(3000);