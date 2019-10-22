const mongoose = require("mongoose")

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const apartmentSchema = Schema({
    apartmentNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    building: {
        type: ObjectId,
        ref: "Building"
    },
    tenant: {
        type: ObjectId,
        ref: "User"
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

apartmentSchema.virtual("tickets", {
    ref: "Ticket",
    localField: "_id",
    foreignField: "apartment",
    justOne: false,
})

apartmentSchema.statics.create = async function(num, build, tenant) {
    const apartment = new this()
    apartment.apartmentNumber = num
    apartment.building = build
    apartment.tenant = tenant

    await apartment.save()
    return apartment
}

const Apartment = mongoose.model("Apartment", apartmentSchema)
module.exports = Apartment