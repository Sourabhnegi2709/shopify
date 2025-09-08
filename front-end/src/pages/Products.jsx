import React, { useEffect, useState, useContext, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import bag from "../assets/bag.mp4";
import { gsap } from "gsap";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headingIndex, setHeadingIndex] = useState(0);
    const [speed, setSpeed] = useState(20); // Adjust speed here
    const navigate = useNavigate();
    const { handleAddToCart } = useContext(CartContext);
    const tickerRef = useRef(null);
    const headingRef = useRef(null);
    const animationRef = useRef(null);

    const trendingTopics = ["Electronics", "Shoes", "Speakers", "Outfits", "Groceries", "Accessories"];

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    // Fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://shopify-f91m.onrender.com/api/items");
                if (!response.ok) throw new Error("Failed to fetch products");
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

    // GSAP ticker animation with pause on hover
    useEffect(() => {
        if (!tickerRef.current) return;
        const el = tickerRef.current;
        const contentWidth = el.scrollWidth / 2;

        gsap.set(el, { x: 0 });

        animationRef.current = gsap.to(el, {
            x: -contentWidth,
            duration: speed,
            repeat: -1,
            ease: "linear"
        });

        // Pause animation on hover
        const handleMouseEnter = () => animationRef.current.pause();
        const handleMouseLeave = () => animationRef.current.play();

        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            animationRef.current.kill();
            el.removeEventListener("mouseenter", handleMouseEnter);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [speed]);

    // Change heading every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (headingRef.current) {
                gsap.to(headingRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        setHeadingIndex((prev) => (prev + 1) % trendingTopics.length);
                        gsap.to(headingRef.current, { opacity: 1, duration: 0.5 });
                    }
                });
            }
        }, 3000);
        return () => clearInterval(interval);
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
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mx-auto max-w-7xl mb-4">
                <video
                    className="w-full h-full object-cover"
                    src={bag}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Scrolling Ticker */}
            <div className="bg-black text-white py-2 overflow-hidden relative">
                <div ref={tickerRef} className="flex whitespace-nowrap space-x-12 cursor-pointer">
                    {trendingTopics.concat(trendingTopics).map((topic, index) => (
                        <span key={index} className="text-lg font-semibold">
                            {topic}
                        </span>
                    ))}
                </div>
            </div>

            {/* Dynamic Heading */}
            <div className="text-center my-6">
                <h2
                    ref={headingRef}
                    className="text-2xl md:text-4xl font-bold text-gray-800 transition-opacity duration-500"
                >
                    Trending -{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                        {trendingTopics[headingIndex]}
                    </span>
                </h2>
            </div>

            {/* Product Grid */}
            <div className="px-4 max-w-7xl mx-auto mb-8">
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
