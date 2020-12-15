//initializing express
const express = require('express');
const app = express();
//including that courses file in our page
const courses = require('./courses');
//use function is used to include that function in our page
app.use('/courses',courses);

//these are codes for routing 
app.get('/',function(req,res){

    res.send("welcome to my website");

});


// in this route we build url like we set id in our url
// use this link with diff id (http://localhost:3000/secondpage/789)
//this is how we set url building
app.get('/courses/:id',function(req,res){

 res.send("your id is" + req.params.id);//req.parms helps to show data in our screen this also helps to post data
});
// in this route we build url like we set id and coursesn in our url
app.get('/:course_name/course/:id',function(req,res){

    res.send("course name is :" +req.params.course_name + ",And id is :" + req.params.id);

});


// these code show how to use middleware
// here we make one middleware function
function log(req,res,next){

    console.log('hello osho middleware function is running');
      next();// next function
};

app.use(log);
app.get('/middleware',function(req,res){
    res.send('welcome to indexpage');
});





// this is is variable and listen is function which makes our port number
app.listen(3000);