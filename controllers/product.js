'use strict'

const Product = require('../models/product')

// LISTADO DE FUNCIONES

//MOSTRAR UN UNICO PRODUCTO
function getProduct(req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!product) return res.status(404).send({message: `El producto no existe`})

    res.status(200).send({ product: product })
  })
}

//MOSTRAR TODOS LOS PRODUCTOS
function getProducts(req, res) {
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!products) return res.status(404).send({message: 'No existen Productos'})

    res.status(200).send({products})
  })
}

// ACTUALIZAR UN PRODUCTO
function updateProduct(req, res) {
  let productId = req.params.productId
  let update = req.body

  Product.findOneAndUpdate(productId, update, (err, productUpdated) => {
    if (err) return res.status(500).send({message: `Error al Actualizar el producto: ${err}`})

    res.status(200).send(({product: productUpdated}))
  })
}

// BORRAR UN PRODUCTO
function deleteProduct(req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
    if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

    product.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({message: 'El producto ha sido eliminado'})
    })
  }) 
}

// GUARDAR UN PRODUCTO EN MONGODB
function saveProduct(req, res) {
  console.log('POST /api/product')
  console.log(req.body)
  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.descption = req.body.descption

  product.save((err, productStored) => {
    if (err) res.status(500).send({ message: `Error al grabar en la base de datos: ${err}`})

    res.status(200).send({ product: productStored })
  })
}

module.exports = {
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  saveProduct
}