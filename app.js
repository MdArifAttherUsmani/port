const express  = require('express')
const path = require("path")
const hbs = require('hbs')
require("./src/db/conn")
const app = express()
const port =  process.env.PORT || 3001;
const User = require("./src/models/userdata")
const staticPath = path.join(__dirname, "./public")
const temPath = path.join(__dirname, "./templates/views")
const parPath = path.join(__dirname, "./templates/partials")
app.use(express.static(staticPath))
app.use(express.urlencoded({extended:false}))
app.set("views",temPath)
hbs.registerPartials(parPath)


app.set("view engine","hbs")

// routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.post("/contact",async(req,res)=>{
    try {
        const userData  = new User(req.body)
        await userData.save()
        res.status(201).render("index")

    } catch (error) {
        res.status(500).send(error)
    }
})

// server create
app.listen(port, ()=>{
    console.log(`server is running on ${port}`)

})