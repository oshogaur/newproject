const express = require('express');


//Here we make router variable and add ROuter() function with express
const router = express.Router();

/* in this page we have sections with different links
http://localhost:3000/courses
http://localhost:3000/courses/nodejs
http://localhost:3000/courses/expressjs
http://localhost:3000/courses/mongodb
*/
//this http://localhost:3000/courses is for courses section
router.get('/',function(req,res){
var out = `<h1 style="color:red;" align="center">Welcome to couses section</h1><br>`;
    out+= `<a href ="http://localhost:3000/courses/nodejs">Nodejs</a><br>`;
    out+= `<a href ="http://localhost:3000/courses/expressjs">expressjs</a><br>`;
    out+= `<a href ="http://localhost:3000/courses/mongodb">mongodb</a><br>`;
    res.send(out);
});


// this is for http://localhost:3000/courses/nodejs (node js section)
router.get('/nodejs',function(req,res){
    var out = `<h1 style="color:green;" align="center">Welcome to nodejs tutorial</h1><br>`;
        out+= `<a href ="http://localhost:3000/courses/expressjs">expressjs</a><br>`;
        out+= `<a href ="http://localhost:3000/courses/mongodb">mongodb</a><br>`;
                res.send(out);
    });


   // this is for  http://localhost:3000/courses/nodejs (expressjs section)
    router.get('/expressjs',function(req,res){
        var out = `<h1 style="color:grey;" align="center">Welcome to expressjs</h1><br>`;
            out+= `<a href ="http://localhost:3000/courses/nodejs">Nodejs</a><br>`;
            out+= `<a href ="http://localhost:3000/courses/mongodb">mongodb</a><br>`;
            res.send(out);
        });


        //this is for http://localhost:3000/courses/mongodb (mongodb section)
        router.get('/mongodb',function(req,res){
            var out = `<h1 style="color:yellow;" align="center">Welcome to mongodb</h1><br>`;
                out+= `<a href ="http://localhost:3000/courses/nodejs">Nodejs</a><br>`;
                out+= `<a href ="http://localhost:3000/courses/expressjs">expressjs</a><br>`;
                res.send(out);
            });

            //this is module exports function that is use to export our variable from one page to another
              module.exports = router;
