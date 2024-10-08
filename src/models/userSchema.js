const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    subscription: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }); // This adds createdAt and updatedAt fields automatically

const userModel = model("users", userSchema);

module.exports = userModel;
