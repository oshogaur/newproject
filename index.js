const express = require('express');
const app = express();

app.get('/',function(req,res){

    res.send("this is my first page");

});

app.listen(3000);