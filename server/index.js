

let products = require('../products.json')

const express = require('express')

const app = express()

app.use(express.json())

app.listen(4040, () => console.log("Listening on port 4040"))

const getProducts = require('./getProducts')

const getProduct = require('./getProduct')


app.get("/api/products", getProducts)

app.get("/api/products/:id", getProduct)

