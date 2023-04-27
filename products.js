var express = require("express");
const { Product } = require("./Schemas/ProductsSchema");

var router = express.Router();

router.get("/", async (req, res) => {
    var products = await Product.find();
    res.json(products);
});

router.post("/create", async (req, res) => {
    
    var data = req.body;
    var product = await new Product({name: data.name, desc: data.desc, price: data.price,imgUrl: data.imgUrl, category: data.category}).save();
    res.send({created: true, product});
});

router.delete("/delete/:id", async (req,res)=> {

    var id = req.params.id;
    console.log(id);
    Product.deleteOne({_id: id}).then(e=>res.send("Successfully Deleted One Item")).catch(err=>res.send(err));
    
    
})

module.exports = router;
