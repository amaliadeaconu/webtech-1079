const express=require("express") 

const app = express()  
let port = 8080
app.listen(port,()=>{
    console.log("server pornit " + 8080)
})


app.get("/ping", (req,res)=>{
    res.send("Hello everybody")
})