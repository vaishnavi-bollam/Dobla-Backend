const Cart = require("../models/cartSchema")


const getAllCartItemsByUserId = async (req, res) => {
    try {
        const { googleId, userId } = req.query; // Accept googleId as a query parameter
        console.log("googleId", googleId)
        console.log("userId", userId)


        let cartItems;
        if (googleId) {
            console.log("googleId", googleId)
            cartItems = await Cart.find({ googleId });
        } else if (userId) {
            console.log("userId", userId)
            cartItems = await Cart.find({ userId });
        } else {
            return res.status(400).json({ message: "User ID or Google ID is required" });
        }

        if (cartItems.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

// Create a new cart item
const createCartItem = async (req, res) => {
    try {
        const { userId, googleId, title, brand, quantity, total_price, image_url } = req.body;

        if (!title || !brand || !quantity || !total_price || !image_url) {
            return res.status(400).json({ message: "All required fields must be provided" });
        }

        const newCartItem = await Cart.create({
            userId,
            googleId,
            title,
            brand,
            quantity,
            total_price,
            image_url
        })
        res.status(201).json(newCartItem);
    } catch (error) {
        res.status(500).json({ message: "Error creating cart item", error });
    }
};

// Update a cart item
const updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, brand, quantity, total_price, image_url } = req.body;

        const cartItem = await Cart.findById(id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        // Update the fields if provided
        if (title) cartItem.title = title;
        if (brand) cartItem.brand = brand;
        if (quantity) cartItem.quantity = quantity;
        if (total_price) cartItem.total_price = total_price;
        if (image_url) cartItem.image_url = image_url;

        await cartItem.save();
        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: "Error updating cart item", error });
    }
};

// Delete a cart item
const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;

        const cartItem = await Cart.findById(id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        await cartItem.deleteOne();
        res.status(200).json({ message: "Cart item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting cart item", error });
    }
};

module.exports = { getAllCartItemsByUserId, createCartItem, updateCartItem, deleteCartItem };


