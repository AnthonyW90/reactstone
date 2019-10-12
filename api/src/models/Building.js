const mongoose = require("mongoose")
const Apartment = require('./Apartment')

const { Schema } = mongoose

const buildingSchema = Schema({
    buildingNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
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

buildingSchema.virtual("apartments", {
    ref: "Apartment",
    localField: "_id",
    foreignField: "building",
    justOne: false,
})

const Building = mongoose.model("Building", buildingSchema)
module.exports = Building