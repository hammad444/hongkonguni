
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


const data = {
    name:"Hammad"
}
app.get('/home',(req,res)=>{
    console.log(req);
    res.send(data);
})


app.post('/post',(req,res)=>{
    console.log(req.body);
    res.send("Data Recevied")
})







app.listen(4000,()=>{
    console.log("Server is Up");
})