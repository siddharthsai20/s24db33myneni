// const mongoose = require("mongoose")
// const conferenceSchema = mongoose.Schema({
// conference_name: String,
// location: String,
// year: Number
// })
// module.exports = mongoose.model("conference",
// conferenceSchema)

const mongoose = require("mongoose");

const conferenceSchema = mongoose.Schema({
    conference_name: String,
    location: String,
    year: Number
});

module.exports = mongoose.model("Conference", conferenceSchema);