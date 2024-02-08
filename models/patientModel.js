const mongoose = require("mongoose")
const patientSchema = new mongoose.Schema(
    {
        patientName:String,
        patientAge:String,
        phone:String,
        address:String,
        symptom:String,
        status:String
    }
)


module.exports=mongoose.model("patient",patientSchema)