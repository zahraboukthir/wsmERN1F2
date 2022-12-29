/**
 *import express
 */
const express = require('express')
/**
 * import dotenv : variables d'environement
 */
require("dotenv").config()
/**
 * import fichier de connexion au Base de données
 */
const cors=require("cors")
const connectDB=require("./config/connectDB")
/**
 * instanciation des methodes d'express dans un variable
 */
const app = express()
/**
 * ws send data in the body of request 
with json format but the server doesn't understand json
so we have to pars the body
 */
/**
 *1- pars the body using passport
 *  */ 
// const passport = require("passport");
// app.use(passport.initialize());
/**
 * or 2- pars the body using the method json() of express: express.json() 
 */
app.use(express.json())
/**
 * if there is no port in .env use the port 5000
 */
const port = process.env.port||5000
connectDB()

// the millware static for the uploads of photos in thier folders
app.use("/uploads", express.static(__dirname + "/uploads"));
 app.use(cors())
/**
 * the routes
 */
app.use("/prodcut",require("./routes/productRoutes"))
app.use("/user",require("./routes/userRoutes"))

/**
 * put the server listen
 */
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
