const mongoose = require('mongoose')

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const ticketSchema = Schema({
    ticketNumber: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // priority: [1, 2, 3, 4, 5],
    apartment: {
        type: ObjectId,
        ref: "Apartment",
    },
    building: {
        type: ObjectId,
        ref: "Building"
    },
    estimatedCost: {
        type: String,
    },
    actualCost: {
        type: String,
    },
    estimatedTimeToComplete: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    servicedOn: {
        type: Date,
    },
    servicedBy: {
        type: ObjectId,
        ref: "User"
    }
})

const Ticket = mongoose.model("Ticket", ticketSchema)
module.exports = Ticket