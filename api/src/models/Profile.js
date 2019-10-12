const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const profileSchema = Schema({
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isManager: {
        type: Boolean,
        default: false,
    },
    isMaintenance: {
        type: Boolean,
        default: false,
    },
    isResident: {
        type: Boolean,
        default: false,
    },
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