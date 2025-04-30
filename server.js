// import the expressjs step:1
const express =require ('express');

const app=express();

// postmam stauts step:3
app.get('/',(req,res)=>{
  res.send('testing the server is working fine or not')
})

// start the server step:2
app.listen(3001,'127.0.0.1',()=>{
  console.log("The server is running at http://127.0.0.1:3001");
})