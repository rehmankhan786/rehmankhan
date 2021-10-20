const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://rehmankhan:<password>@cluster0.28tm0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected")
}).catch((error) => {
    console.log("Unsuccessful", error)
})