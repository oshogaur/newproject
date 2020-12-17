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
    con.query("SELECT * FROM `user`",function(err,result){


        if(err) throw err;
        console.warn("all results are here",result)
    })

})