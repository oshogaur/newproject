


//this is an example to check that our database in connected with our app or not
var mysql = require('mysql');
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

//initialising mysql in our app
/*var mysql = require('mysql');



var con = mysql.createConnection({

host :"localhost",
user:"root",
password:"",
database:"node"
});
con.connect(function(error){
    if(error) throw error;
    //choose any query how to insert update delete put any thing
    // inserting data using query and daa result with the use of call back function
    con.query("INSERT INTO `user`(`id`, `username`, `email`, `password`) VALUES ('','oshogaur','osho@ak','1458')",function(err,result){
        if(err) throw err;
        console.warn("not connect",result)
    })*/


//initializing express
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
app.set('view engine','pug');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

// get method for fetch all products. 
app.get('/gett', function(req, res, next) {
  var sql = "SELECT * FROM user ";
  con.query(sql, function(err, rows, fields) {
    if (err) {
        res.send('something went wrong');
     // res.status(500).send({ error: 'Something failed!' })
    }
    res.json(rows)
  })
});





//now ia m goint to make another program for inserting data in database
       
//including that courses file in our page
const courses = require('./courses');
const { request } = require('express');
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
    console.log(req.query)
    res.sendFile('login.html',{root:__dirname});
    });

    // when form get hit from /login route it comes here and then form is sending information to our database in user table
    app.post('/submit',function(req,res){
        //this console.body give the body in null so that we can execute in our query
           console.log(req.body);
           //making insert query and that res.body.name is the name of the body we pass and that body we get from console.log
         con.query("INSERT INTO `user`(`username`, `email`, `password`) VALUES ('"+ req.body.name +"','"+ req.body.email +"','"+ req.body.password+"')",function(err,result){
            if (err) throw err       
            // res.sendFile('details.html',{root:__dirname});
            //res.render('details',{title:'Data saved',message:'saved sucessfully'})
              res.send('data inserted sucessfully');
             }); 
             con.end();
            });
        app.listen(3000); 
// this is a variable and listen is function which makes our port number

