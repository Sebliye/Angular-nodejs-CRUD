const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const students=[
     {name:'luna',age:23},
     {name:'kali',age:10},
     {name:'dogu',age:48}
]

/* to get the body information use bodyparser */
/* url encoded is for the form */
//app.use(bodyParser.urlencoded({extended:false}))

//json() is to covert the json to javascript object

app.use(bodyParser.json())



//get
app.get('/',(req,res,next)=>{
res.send(students)
})

//post
app.post('/form',(req,res)=>{
//console.log(req.body);
students.push(req.body);
res.send(students)
})

app.put('/student/:name',(req,res)=>{
     console.log(req.params.name)
     //console.log(req.body)
     for(let [i,stu] of students.entries()){
          if(req.params.name==stu.name){
               console.log(i)
               students.splice(i,1,req.body)
          }
     }
          res.send(students)
          console.log(students)
})

app.delete('/student/:index',(req,res)=>{
     console.log(req.params);
     students.splice(req.params.index,1);
     res.send(students);
     console.log(students)
})





app.listen(1000,()=>console.log('ya listening to 1000 port '))