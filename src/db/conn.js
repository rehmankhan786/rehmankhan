const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/clients", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected")
}).catch((error) => {
    console.log("Unsuccessful", error)
})