const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const applicationSchema = Schema({
    applicant: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    apartment: {
        type: ObjectId,
        ref: 'Apartment',
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    income: {
        type: Number,
    },
    occupants: {
        type: Number,
    },
    previousStreetAddress: {
        type: String,
    },
    previousCity: {
        type: String,
    },
    previousState: {
        type: String,
    },
    previousZip: {
        type: String,
    },
    bankruptcy: {
        type: Boolean,
    },
    evicted: {
        type: Boolean,
    },
    status: {
        enum: ["open", "approved", "closed"],
        type: String
    }
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
