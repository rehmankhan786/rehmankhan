const express = require("express")
const port = 2000
app = express()
const path = require("path")



app.use(express.static(path.join(__dirname)))

app.get("/", (req, res) => {

    res.sendfile("./index.html")




})
app.listen(port, (req, res) => {

        console.log(`listening on http://127.0.0.1:${port}`)


    })
    // console.log(__dirname)