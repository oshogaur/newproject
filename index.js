


//this is an example to check that our database in connected with our app or not
/*var mysql = require('mysql');
const { rootCertificates } = require('tls');
var con = mysql.createConnection({

host :"localhost",
user:"root",
password:"",
database:"node"
});
con.connect(function(error){

    if(error) throw error;
    console.log("connected");
})
*/
//initializing express
const express = require('express');
const app = express();
//initialising mysql in our app
var mysql = require('mysql');
var con = mysql.createConnection({

host :"localhost",
user:"root",
password:"",
database:"node"
});
con.connect(function(error){
    if(error) throw error;
    con.query("INSERT INTO `user`(`id`, `username`, `email`, `password`) VALUES ('','oshogaur','osho@ak','1458')",function(err,result){
        if(err) throw err;
        console.warn("data inserted",result)
    })

})


//now ia m goint to make another program for inserting data in database
       
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

   // console.log('hello osho middleware function is running');
      next();// next function helps to change in req,res cycle
};

app.use(log);
//here we route for middle ware function
app.get('/middleware',function(req,res){
    
    res.send('welcome to middleware function ');
});


//here we include our html page with router with the use of that function showing below
app.get('/home',function(req,res){

res.sendFile(__dirname+"/home.html");
});
//here we make one form from which we GET informations
app.get('/login',function(req,res){
    console.log(req.query);
    res.sendFile(__dirname+"/login.html");
   
    });
// this is a variable and listen is function which makes our port number

app.listen(3000);

