 const request = require('superagent')
var port=4000;
 const express=require('express');


 const app=express();
 
 app.get('/home',(req,res,err)=>{
    res.send({"id":21,"number":28934982})
    res.end();
})
   
request
    .get('http://localhost:4000/home')
    .then(res=>{
        console.log(JSON.stringify(res.body,null,2))
    }).catch((err)=>{
            console.error(err.message);
 })
 //
app.listen(port,()=>{
    console.log(`Listening at ${port}`)
});