const Product = require('../models/productModel')

// @desc Get All Products
// @Route  GET api/products 
async function getProducts(req, res) {
  try {
    const products = await Product.findAll()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products)) 
  } catch(errors) {
    console.log(errors)
  }
}

// @desc Get A Single Products
// @Route  GET api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id)

    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({message: 'Product Not Found'})) 
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(product)) 
    }

  } catch (error) {
    console.log(error)
  }
}

// @desc Create A Single Products
// @Route  POST api/products
async function createProduct(req, res, id) {
  try {
    // Buffer 
    let body = ''

    // The data from the client comes in as a stream (not all at once). 
    // We must convert and add the chunks (of data from the client) to the body as it comes in.
    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    // Once all of the data has come in, we parse it from a JSON string into a JSON object.
    // and extract the values.
    req.on('end', async () => {
      const { title, description, price } = JSON.parse(body) 

      // Create a new object with the extracted values. 
      const product = {
        title,
        description, 
        price
      }
      
      const newProduct = await Product.create(product)
      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(newProduct))
    }) 
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts, 
  getProduct,
  createProduct
}