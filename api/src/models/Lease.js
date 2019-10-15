const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const leaseSchema = Schema({
    leaseStartDate: {
        type: Date,
        required: true
    },
    leaseEndDate: {
        type: Date,
        required: true
    },
    apartment: {
        type: ObjectId,
        ref: "apartment",
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    landlord: {
        type: String,
        required: true    
    },
    landlordContact: {
        type: String,
        required: true
    },
    tenant: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    rent: {
        type: Number,
        required: true,
    },
    deposit: {
        type: Number,
        required: true,
    },
    lateFee: {
        type: Number,
    }
})

const Lease = mongoose.model("Lease", leaseSchema)
module.exports = Lease