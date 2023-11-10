const express = require("express")
const mongoose = require('mongoose')
const cors=require("cors")

const DetailsModel=require('./models/Details')
const DetailModel=require('./models/regdetails')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sinchanakundapur:sinchu123@cluster0.avb4kro.mongodb.net/?retryWrites=true&w=majority")


app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    DetailsModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/Cleanup_register',(req,res)=>{
    RegDetailModel.create(req.body)
    .then(register=>res.json(register))
    .catch(err=>res.json(err))
})

app.post("/signup", (req,res)=>{
        DetailsModel.create(req.body)
        .then(fleetdetails=>res.json(fleetdetails))
        .catch(err=>res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})