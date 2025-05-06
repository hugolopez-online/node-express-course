const mongoose = require("mongoose");

const connectionString = "mongodb+srv://sketchugo:Sunflower%2CVol.6@nodeexpressprojects.qffen0p.mongodb.net/03-TAKS-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects";

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;