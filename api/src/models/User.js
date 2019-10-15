const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const { Schema } = mongoose
const { ObjectId } = Schema.Types

const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    role: {
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

userSchema.virtual("lease", {
    ref: "Lease",
    localField: "_id",
    foreignField: "tenant",
    justOne: true,
})

userSchema.virtual("apartment", {
    ref: "Apartment",
    localField: "_id",
    foreignField: "tenant",
    justOne: true,
})

userSchema.virtual("application", {
    ref: "Application",
    localField: "_id",
    foreignField: "applicant",
    justOne: true,
})

userSchema.statics.signUp = async function(username, password, role) {
    const user = new this()
    user.username = username
    user.hashPassword(password)
    user.role = role

    await user.save()

    return user
}

userSchema.methods.hashPassword = function(plainText) {
    this.password = bcrypt.hashSync(plainText, 4)
}

userSchema.methods.sanitize = function() {
    return {
        ...this._doc,
        password: undefined
    }
}

userSchema.methods.comparePassword = function (plainText) {
    return bcrypt.compareSync(plainText, this.password)
}

const User = mongoose.model("User", userSchema)
module.exports = User