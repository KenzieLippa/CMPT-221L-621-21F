const { builtinModules } = require("module");
const mongoose = require("mongoose");

const studentProfile = mongoose.Schema({
    //info in here for what will be required for the form
    firstName: String,
    lastName: String
})
module.exports = mongoose.model("Student", studentProfile);
