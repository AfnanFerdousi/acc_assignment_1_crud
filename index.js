const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/v1/users.route')

require("dotenv").config()

const app = require('express')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


app.use("/app/v1/users", userRoutes)

app.get('/', (req, res) => {
    res.send("server is running")
})

app.all("*", (req, res) => {
    res.send("No routes found!")
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
