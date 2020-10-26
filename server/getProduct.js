products = require('../products.json')

const getProduct = (req, res) => {
    console.log("req.params",req.params)
    const {id } = req.params
    for (let i = 0; i < products.length; i++){
        if(products[i]['id'] === +id){
            console.log("products[i]",products[i])
            res.status(200).send(products[i])
        }
        
    }
    res.status(404).send("Item not in list")
}

module.exports = getProduct