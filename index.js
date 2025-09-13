const express = require('express')

const bodyParser = require('body-parser')

require("dotenv").config()

const database = require("./config/database")

const productRoutes = require("./routes/product.routes");

database.connect()

const app = express()
const port = process.env.PORT

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.use("/", productRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})