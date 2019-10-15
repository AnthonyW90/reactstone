const mongoose = require("mongoose")
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const applicationSchema = Schema({
    applicant: {
        type: ObjectId,
        ref: "User",
        required: true
    },
})

const Application = mongoose.model("Application", applicationSchema)
module.exports = Application