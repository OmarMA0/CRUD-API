const router = require('express').Router();
const product = require('../ProudctModels/model')

router.get('/' , (req , res)=>{
    res.send('hello from Node API')
})
router.post('/products' , async (req , res)=>{
    const Productre = new product({
        name : req.body.name,
        quantity : req.body.quantity,
        price : req.body.price,
        image : req.body.image,
    })
    try{
       const savedproduct = await Productre.save();
       res.send(savedproduct)
    }catch(err) {res.status(400).send({message : err.message})}

    /*
    try{ const productRe = await product.create(req.body)         //this is another way to saving products in database
        res.status(200).json(productRe)

    }catch(error){res.status(500).json({message:error.message}) } */
})

module.exports = router