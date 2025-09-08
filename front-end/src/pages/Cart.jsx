import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { X } from "lucide-react";

const Cart = () => {
  const { cart, handleRemoveFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Show loading if cart is not ready
  if (!cart || !cart.items) return <p className="pt-20 text-center">Loading...</p>;

  // Filter valid items that have a product object
  const validItems = cart.items.filter(item => item.productId && typeof item.productId === "object");

  // Calculate total safely
  const totalAmount = validItems.reduce(
    (acc, item) => acc + (item.productId.price || 0) * (item.quantity || 0),
    0
  );

  const handlePlaceOrder = () => {
    if (validItems.length === 0) return;
    navigate("/checkout");
  };

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {validItems.length === 0 ? (
        <p className="text-center text-gray-700">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {validItems.map((item) => (
              <li
                key={item.productId._id}
                className="mb-4 flex items-center gap-4 border p-3 rounded-lg"
              >
                <img
                  src={item.productId.image || "/fallback.png"}
                  alt={item.productId.name || "Product"}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.productId.name || "Unknown Product"}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{((item.productId.price || 0) * (item.quantity || 0)).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.productId._id)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  <X className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>

          {/* Total and Place Order */}
          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <div className="text-xl font-bold">
              Total: ₹{totalAmount.toFixed(2)}
            </div>
            <button
              onClick={handlePlaceOrder}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
