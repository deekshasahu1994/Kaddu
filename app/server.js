const express=require('express');
const app=express();
const fs=require('fs');

app.get('/',(req,res)=>{
    res.sendFile('nikhilpagal.html',{root:__dirname});
});

app.listen(3000,()=>{
    console.log("server is stupid");
});

