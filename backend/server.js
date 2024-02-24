const express =require("express")
const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.post('/api/user',(req,res)=>
{
    console.log("hello")
    console.log(req.body)
    res.send('updated')
})
app.listen(5000,()=>{console.log("SERVER STARTED")})