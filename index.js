const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const port = process.env.PORT || 3000
const path = require("path")
const blogs = require("./data/blogs"  )

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
app.listen(port, (req, res) => {
    console.log(`app is listening on port http://127.0.0.1:${port}`)

})