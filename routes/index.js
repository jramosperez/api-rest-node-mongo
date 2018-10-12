'use strict'

const express = require('express')
const api = express.Router()
const productController = require('../controllers/product')


//MOSTRAR UN UNICO PRODUCTO
api.get('/product/:productId', productController.getProduct)
//MOSTRAR TODOS LOS PRODUCTOS
api.get('/product', productController.getProducts)
// ACTUALIZAR UN PRODUCTO
api.put('/product/:productId', productController.updateProduct)
// BORRAR UN PRODUCTO
api.delete('/product/:productId', productController.deleteProduct)
// INGRESAR UN PRODUCTO
api.post('/product/', productController.saveProduct)

module.exports = api