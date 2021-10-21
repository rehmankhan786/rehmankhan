const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const port = process.env.PORT || 3000
const path = require("path")
const blogs = require("./data/blogs")
require("./src/db/conn")
app.use(express.urlencoded({ extended: false }))
const registered = require("./src/models/model")
const swal = require("sweetalert2")

app.set("view engine", "handlebars")
app.engine("handlebars", exphbs())
app.use(express.static(path.join(__dirname, "static")))

app.get("/blog", (req, res) => {

    res.render("blogHome", {
        blogs: blogs
    })
})
app.get("/blogPost/:slug", (req, res) => {
    myBlog = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    res.render("blogPage", {
            title: myBlog[0].title,
            content: myBlog[0].content
        })
        // console.log("title worked")
})
app.get("/home", (req, res) => {

    res.render("homePage", { title: "Home" })

})
app.get("/services", (req, res) => {

    res.render("services", { title: "Services" })

})
app.get("/", (req, res) => {

    res.render("homePage", { title: "Home" })

})
app.get("/contact", (req, res) => {

    res.render("contact", { title: "Contact" })

})
app.post("/contact", async(req, res) => {
    // console.log(req.body.Firstname)
    // console.log(req.body.Lastname)
    // console.log(req.body.user_email)
    // console.log(req.body.user_req)
    // console.log(req.body.user_phone)
    try {


        const registered_clients = new registered({
            user_name: req.body.username,
            user_email: req.body.useremail,
            user_requirements: req.body.userreq,
            user_phone_number: req.body.usernumber,

        })
        const clients = await registered_clients.save();
        const alerter = () => {
            new swal("Submitted", "Your request Has Been Submitted", "success")
        }
        alerter()
        res.render("contact")


    } catch (error) {
        console.log(error)
        res.render("contact")
    }

})
app.listen(port, (req, res) => {
    console.log(`app is listening on port http://127.0.0.1:${port}`)

})