import { createContext, useState, useEffect, useContext } from "react";
import { getCart, addToCart, removeFromCart } from "./CartApi";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { token } = useContext(AuthContext);
    const [cart, setCart] = useState({ items: [] });

    // Fetch cart whenever token changes
    useEffect(() => {
        if (!token) {
            setCart({ items: [] });
            return;
        }

        getCart(token)
            .then(data => setCart({ items: data.items || [] })) // ✅ fallback
            .catch(err => console.error("Failed to fetch cart:", err));
    }, [token]);


    // Add item to cart (optimistic + backend sync)
    const handleAddToCart = async (productId, quantity = 1) => {
        if (!token) return alert("Please log in first");

        setCart(prevCart => {
            const items = prevCart.items || []; // ✅ fallback
            const index = items.findIndex(i => i.productId === productId);

            let updatedItems;
            if (index > -1) {
                updatedItems = [...items];
                updatedItems[index].quantity += quantity;
            } else {
                updatedItems = [...items, { productId, quantity }];
            }

            return { ...prevCart, items: updatedItems };
        });

        try {
            await addToCart(token, productId, quantity);
        } catch (err) {
            console.error(err);
        }
    };


    // Remove item
    const handleRemoveFromCart = async (productId) => {
    if (!token) return alert("Please log in first");

    try {
        // Optimistically update local state safely
        setCart(prevCart => ({
            ...prevCart,
            items: (prevCart.items || []).filter(
                item => item.productId && item.productId._id !== productId
            )
        }));

        // Update backend
        await removeFromCart(token, productId);
    } catch (err) {
        console.error("Failed to remove from cart", err);
        // Optional: revert local change if backend fails
        getCart(token).then(data => setCart({ items: data.items || [] }));
    }
};



    // Get total items count
    const totalItems = cart?.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;

    return (
        <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveFromCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};
