const express=require('express');


const app=express();
var callback=(req,res,err)=>{
    if(err){console.log(err)}
    res.send({"name":"sunil",
            "number":12334});
    // res.next;
}
app
.get('/search',callback)
.get('/search/api',(req,res)=>{
    res.send({"name":"sunil",
    "number":12334})
})

app.listen('5100');