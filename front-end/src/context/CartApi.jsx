const API_URL = "https://shopify-f91m.onrender.com/api/cart";

// ✅ Get Cart
export const getCart = async (token) => {
    const res = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return res.json();
};

// ✅ Add to Cart
export const addToCart = async (token, productId, quantity = 1) => {
    const res = await fetch(`${API_URL}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ productId, quantity })
    });
    return res.json();
};

// ✅ Remove from Cart
export const removeFromCart = async (token, productId) => {
    const res = await fetch(`${API_URL}/remove/${productId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    return res.json();
};
