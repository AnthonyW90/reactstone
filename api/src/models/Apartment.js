const mongoose = require("mongoose")

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const Building = require('./Building')

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
    bedRooms: {
        type: Number,
        required: true,
    },
    bathRooms: {
        type: Number,
        required: true,
    },
    squareFoot: {
        type: Number,
        required: true,
    },
    rent: {
        type: Number,
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

apartmentSchema.statics.newApartment = async function(data) {
    const apartment = new this()
    console.log('Logging...', data)
    const building = await Building.findById(data.building)
    apartment.set({
        ...data,
        building: building._id
    })
    await apartment.save()
    return apartment
}

const Apartment = mongoose.model("Apartment", apartmentSchema)
module.exports = Apartment