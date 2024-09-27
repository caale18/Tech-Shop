const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors')

app.use(express.json());

//importamos todas las rutas
const products = require('./routes/product');
const auth = require('./routes/auth');



app.use('/api/v1', products)
app.use('/api/v1', auth)

//Middlewaare para el manejo de errores
app.use(errorMiddleware);

module.exports = app