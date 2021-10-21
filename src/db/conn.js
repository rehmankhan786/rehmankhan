const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://rehmankhan:8755414329@cluster0.28tm0.mongodb.net/project_portfolio?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected")
}).catch((error) => {
    console.log("Unsuccessful", error)
})