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
  conference_name: {
    type: String,
    required: [true, "Conference name is required"],
    minlength: [3, "Conference name must be at least 3 characters long"],
    maxlength: [100, "Conference name cannot exceed 100 characters"]
  },
  location: {
    type: String,
    required: [true, "Location is required"]
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1900, "Year must be after 1900"],
    max: [2100, "Year must be before 2100"]
  }
});

module.exports = mongoose.model("Conference", conferenceSchema);
