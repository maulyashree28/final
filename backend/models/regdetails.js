const mongoose= require('mongoose')

const RegDetailSchema=new mongoose.Schema({
    name:String,
    email:String,
    cleanupDrive:String
    

})
const RegDetailModel=mongoose.model("register",RegDetailSchema)
module.exports=RegDetailModel