const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    userId: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: active,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
  
    },
    renewDate: {
        type: Date,
    },
    autoRenew:{
        type: Boolean,
        default: true,
    },
    paymentMethod:{
        type: String,
    }
}, { timestamps: true }); // This adds createdAt and updatedAt fields automatically

const userModel = model("users", userSchema);

module.exports = userModel;
