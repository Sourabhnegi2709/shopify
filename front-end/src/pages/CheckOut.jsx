import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
// import { QRCode } from "qrcode.react";


const Checkout = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const [shippingInfo, setShippingInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: ""
    });

    const [paymentDone, setPaymentDone] = useState(false);

    const totalAmount = cart.items.reduce(
        (acc, item) => acc + item.productId.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
    };

    const handlePayment = () => {
        // Simulate QR code payment success
        setPaymentDone(true);
        alert("Payment Successful! Order placed.");
        navigate("/"); // Redirect to home or order confirmation
    };

    return (
        <div className="pt-20 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Place Your Order</h1>

            {cart.items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {/* Shipping Form */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={shippingInfo.name}
                                onChange={handleChange}
                                className="border p-2 rounded-md"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={shippingInfo.email}
                                onChange={handleChange}
                                className="border p-2 rounded-md"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={shippingInfo.phone}
                                onChange={handleChange}
                                className="border p-2 rounded-md"
                            />
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={shippingInfo.address}
                                onChange={handleChange}
                                className="border p-2 rounded-md"
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={shippingInfo.city}
                                onChange={handleChange}
                                className="border p-2 rounded-md"
                            />
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Pincode"
                                value={shippingInfo.pincode}
                                onChange={handleChange}
                                className="border p-2 rounded-md"
                            />
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        <ul className="border rounded-md p-4 space-y-2">
                            {cart.items.map(item => (
                                <li key={item.productId._id} className="flex justify-between">
                                    <span>{item.productId.name} x {item.quantity}</span>
                                    <span>₹{item.productId.price * item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-right mt-4 text-lg font-bold">
                            Total: ₹{totalAmount.toFixed(2)}
                        </div>
                    </div>

                    {/* QR Payment */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                        {!paymentDone ? (
                            <div className="flex flex-col items-center gap-4">
                                <p>Scan this QR to pay:</p>
                                {/* <QRCode value={`Pay ₹${totalAmount.toFixed(2)}`} size={200} /> */}
                                <button
                                    onClick={handlePayment}
                                    className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    Simulate Payment
                                </button>
                            </div>
                        ) : (
                            <p className="text-green-600 font-bold text-lg">Payment Completed!</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Checkout;
