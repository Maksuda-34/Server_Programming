require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const router = require("./routes");
const mongoose = require("mongoose")


Database_URL = process.env.Database_URL

mongoose.connect(Database_URL).then(()=>{
    console.log("Database connected!")
}).catch((error)=>{
    console.log(error)
})

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)
app.set("view engine", "ejs")
app.set("views", __dirname+"/views")

app.listen(port, ()=>{
    console.log(`App is running at http://localhost:${port}`)
})
