const express = require("express");
const {
    getAllCartItemsByUserId,
    createCartItem,
    updateCartItem,
    deleteCartItem
} = require("../controllers/cartController");

const router = express.Router();

router.get("/", getAllCartItemsByUserId);
router.post("/", createCartItem);
router.put("/:id", updateCartItem);
router.delete("/:id", deleteCartItem);

module.exports = router;
