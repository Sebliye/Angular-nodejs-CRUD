const express=require('express');
const bodyParser=require('body-parser');
const app=express();


//get
app.get('/',(req,res,next)=>{
res.send('hello seble')
})



app.listen(1000,()=>console.log('ya listening to 1000 port '))