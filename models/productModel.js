const products = require('../data/products')

// @desc Get All Products
// @Route  GET api/products 
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

// @desc Get A Single Products
// @Route  GET api/product/:id
function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id)

    resolve(product) 
  })
}



module.exports = {
  findAll,
  findById
}