const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided"],
        trim: true,
        maxlength: [20, "Name must be 20 or fewer characters long"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema);