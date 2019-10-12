const mongoose = require("mongoose")

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const apartmentSchema = Schema({
    apartmentNumber: {
        type: Number,
        required: true,
    },
    building: {
        type: ObjectId,
        ref: "Building"
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

const Apartment = mongoose.model("Apartment", apartmentSchema)
module.exports = Apartment