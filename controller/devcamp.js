const BootCamp=require('../models/bootcamp')

//@desc get all bootcamps
//route /get/api/v1/bootcamps

exports.getBootcamps=async(req,res,next)=>{

    try {
        const allBootCamps=await BootCamp.find()
         res.status(200).json({
             sucess:true,
             data:allBootCamps
         })

    } catch (err) {
        res.status(404).json({
            sucess:false,
            error:err.message
        })
    }

    // res.status(200).json({ sucess: true,message:"SUCCESFULLY ALL",hello:req.hello })
}


//@desc get single bootcamps
//route /get/api/v1/bootcamps/:id

exports.getBootcamp=async (req,res,next)=>{
    
    try {
        const singleBootCamps=await BootCamp.findById(req.params.id)
        if(!singleBootCamps)
        {
            return res.status(400).json({sucess:false,error:'Invalid Id'})
        }
         res.status(200).json({
             sucess:true,
             data:singleBootCamps
         })

    } catch (err) {
        console.log("SIGNLE FETCH ERROR",err.message)
        res.status(404).json({
            sucess:false,
            error:err.message
        })
    }
    // res.status(200).json({ sucess: true,message:`fetched at ${req.params.id}` })

}

//@desc post single bootcamps
//route /get/api/v1/bootcamps

exports.createBootcamp=async(req,res,next)=>{

try {
    const newBootCamp= await BootCamp.create(req.body)
    res.status(201).json({
        sucess:true,
        data:newBootCamp
    })
    console.log("BOOT CAMP SUCESS")
    
} catch (error) {
    console.log("BOOT CAMP FAIL",error.message)
    res.status(400).json({
        sucess:false,
        data:'',
        error:error.message
    })
}

}

//@desc update bootcamps
//route /put/api/v1/bootcamps/:id

exports.updateBootcamp=async(req,res,next)=>{
    try {
        const updateBootCamps=await BootCamp.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
        })
        if(!updateBootCamps)
        {
            return res.status(400).json({sucess:false,error:'Invalid Id'})
        }
         res.status(200).json({
             sucess:true,
             data:updateBootCamps
         })

    } catch (err) {
        console.log("UPDATE ERROR",err.message)
        res.status(404).json({
            sucess:false,
            error:err.message
        })
    }
    // res.status(200).json({ sucess: true,message:`Updated at ${req.params.id}` })

}

//@desc update bootcamps
//route /put/api/v1/bootcamps/:id

exports.deleteBootcamp=async(req,res,next)=>{
    try {
        const deleteBootCamps=await BootCamp.findByIdAndDelete(req.params.id)
        if(!deleteBootCamps)
        {
            return res.status(400).json({sucess:false,error:'Invalid Id'})
        }
         res.status(200).json({
             sucess:true,
             data:{}
         })

    } catch (err) {
        console.log("DELETE ERROR",err.message)
        res.status(404).json({
            sucess:false,
            error:err.message
        })
    }

}