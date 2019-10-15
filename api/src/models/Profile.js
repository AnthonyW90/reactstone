const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const profileSchema = Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    }
})

const Profile = mongoose.model("Profile", profileSchema)
module.exports = Profile