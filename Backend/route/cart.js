import express from "express";
import Cart from "../models/Cart.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Get user's cart
router.get("/", authMiddleware, async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.id }).populate("items.productId");
        if (!cart) {
            cart = new Cart({ userId: req.user.id, items: [] });
            await cart.save();
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Add item to cart
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        let cart = await Cart.findOne({ userId: req.user.id });

        if (!cart) {
            cart = new Cart({ userId: req.user.id, items: [] });
        }

        const itemIndex = cart.items.findIndex(i => i.productId.toString() === productId);

        if (itemIndex > -1) {
            // Item exists → increase quantity
            cart.items[itemIndex].quantity += quantity || 1;
        } else {
            // New item → push to cart
            cart.items.push({ productId, quantity: quantity || 1 });
        }

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ✅ Remove item from cart
router.delete("/remove/:productId", authMiddleware, async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(i => i.productId.toString() !== req.params.productId);

        await cart.save();
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
