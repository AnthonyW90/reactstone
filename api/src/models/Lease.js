const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const leaseSchema = Schema({
    leaseStartDate: {
        type: Date,
    },
    leaseEndDate: {
        type: Date,
    },
    apartment: {
        type: ObjectId,
        ref: "Apartment"
    },
    streetAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    landlord: {
        type: String,  
    },
    landlordContact: {
        type: String,
    },
    tenant: {
        type: ObjectId,
        ref: "User",
    },
    rent: {
        type: Number,
    },
    deposit: {
        type: Number,
    },
    lateFee: {
        type: Number,
    }
})

leaseSchema.statics.newLease = async function(data){
    const lease = new this()

    lease.set(data)

    // for(thing of Object.keys(data)) {
    //     lease[thing] = data[thing]
    // }

    await lease.save()

    return lease
}


const Lease = mongoose.model("Lease", leaseSchema)
module.exports = Lease