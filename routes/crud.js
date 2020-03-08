const express = require('express');
const router = new express.Router();
const rishi = require("../services/dataservices");


router.get('/get',async (req,res)=>{
    try{
        const info= await rishi.find();
        res.send(info);
        console.log("showing info");
    }
    catch(error){
        res.status(500).send(error);
    }
});

router.get('/get/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const  info=await rishi.findById(id);
        if(info){
            res.send(info);
            console.log("showing info for particular id");
        }
        
    }catch(error){
        res.status(500).send(error);

    }
    
});


router.post('/insert',async(req,res)=>{
    const para=new rishi({
        "id":req.body.id,
        "name":req.body.name,
        "collegename":req.body.collegename
    })
    try{
        const ins=await para.save();
        res.send(ins);
        console.log("details inserted");
    }catch(error){
        res.status(404).send(error);
    }
    
});

router.put('/update/:id',async(req,res)=>{
    const id=req.params.id;
    try{
        const upd=await rishi.findOneAndUpdate({_id:id},req.body);
        res.send(upd);
        console.log("details updated");
    }catch(error){

        res.status(500).send(error);
    }
});

router.delete('/delete/:id',async (req,res)=>{
    const id=req.params.id;
    try{
        const user=await rishi.findByIdAndDelete(id);
        if(user){
            res.send(user);
            console.log("details deleted");

        }
        
    }catch(error){

        res.status(500).send(error);
    }
});


module.exports = router;



