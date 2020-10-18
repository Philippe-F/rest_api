const Product = require('../models/productModel')

async function getProducts(req, res) {
  try {
    const products = await Product.find()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products)) 
  } catch(errors) {

  }
}

module.export = {
  getProducts
}