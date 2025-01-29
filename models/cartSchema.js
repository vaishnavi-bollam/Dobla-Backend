const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: false,
        unique: true,
        ref: 'signup'
    },
    googleId: {
        type: String,
        required: false
    },
    title: { type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    total_price: { type: Number, required: true },
    image_url: { type: String, required: true },



}, { timestamps: true });




module.exports = mongoose.model("cart", cartSchema);
