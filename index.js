'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

// MENSAJE PARA LA CONSOLA DEL SERVIDOR
mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Erro al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(config.port, () => {
    console.log(`API RESTful corriendo en http://localhost:${config.port}`)
  })
})

