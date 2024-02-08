const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./controllers/patientrouter")


const app=express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://aravind336:aravind336@cluster0.hsvdpyv.mongodb.net/covidDB?retryWrites=true&w=majority",
{useNewUrlParser:true})


app.use("/api/patient",router)

app.listen(3001,()=>{
    console.log("Server Running...")
})