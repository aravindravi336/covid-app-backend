const express=require("express")
const router=express.Router()
const patientmod=require("../models/patientModel")



router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientmod(data)
    let result= await patient.save()
    res.json({status:"success"})
})


module.exports=router


