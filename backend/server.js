const express = require('express')
require("dotenv").config()
const connectDB=require("./config/connectDB")
const app = express()
app.use(express.json())
const port = process.env.port||5000
connectDB()
app.use("/prodcut",require("./routes/productRoutes"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))