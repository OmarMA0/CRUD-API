const router = require('express').Router();
const product = require('../ProudctModels/model')
const mongoose = require("mongoose");

router.delete('/product/:id' , async(req , res)=>{                 //delete by ID
    try{
        
        const id = req.params.id
        console.log(id)
        if (!mongoose.Types.ObjectId.isValid(id)) {                              //check if the ID is valid
            return res.status(400).send({ message: 'Invalid ID format' });
        } 
        //update item by ID and ensure the updated item is the one returned
         const Product =  await product.findByIdAndDelete(id , req.body )        
        if(!Product) {
            res.status(400).send({message : 'product was not found'})
        }

        res.status(200).send("Product has been deleted")
         
    }catch(err) {
        res.status(400).send({message : err.message})
    }
})


module.exports = router