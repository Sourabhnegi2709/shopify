import React, { useEffect, useState, useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import bag from "../assets/bag.mp4";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { handleAddToCart } = useContext(CartContext);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://shopify-f91m.onrender.com/api/items");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Failed to load products");
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div className="pt-20 text-center text-gray-700">Loading products...</div>;
    }

    if (error) {
        return <div className="pt-20 text-center text-red-600">{error}</div>;
    }

    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {/* Video Header */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mx-auto max-w-7xl mb-8">
                <video
                    className="w-full h-full object-cover"
                    src={bag}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold animate-bounce">Explore Our Exclusive Products</h1>
                </div>
            </div>

            {/* Product Grid */}
            <div className="px-4 max-w-7xl mx-auto">

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div
                                onClick={() => handleProductClick(product._id)}
                                className="cursor-pointer group"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-gray-600 mt-2">₹{product.price}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleAddToCart(product)}
                                className="w-full bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
