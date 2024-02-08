const express=require("express")
const router=express.Router()
const patientmod=require("../models/patientModel")



router.post("/add",async(req,res)=>{
    let data=req.body
    let patient=new patientmod(data)
    let result= await patient.save()
    res.json({status:"success"})
})
router.get("/view",async(req,res)=>{
    let data=await patientmod.find()
    res.json(data)
})

module.exports=router


