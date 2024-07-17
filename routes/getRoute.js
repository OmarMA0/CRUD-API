const router = require('express').Router();
const product = require('../ProudctModels/model')

router.get('/products' , async(req , res)=>{
    try{
       const products =  await product.find({})        //read all items in the database
       res.status(200).send(products)
         
    }catch(error) {
        res.status(400).send({message : err.message})
    }
})
router.get('/products/:id' , async(req , res)=>{
    try{
       const {id} = req.params
       const singleProduct =  await product.findById(id)        //get item by ID
       res.status(200).send(singleProduct)
         
    }catch(error) {
        res.status(400).send({message : err.message})
    }
})

module.exports = router