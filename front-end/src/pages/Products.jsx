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
    const navigate = useNavigate();
    const { handleAddToCart } = useContext(CartContext);
    const tickerRef = useRef(null);
    const tickerContainerRef = useRef(null);
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

    // GSAP ticker animation - responsive version
    useEffect(() => {
        const setupTicker = () => {
            if (!tickerRef.current || !tickerContainerRef.current) return;

            const container = tickerContainerRef.current;
            const content = tickerRef.current;

            // Clear any previous animation
            if (animationRef.current) {
                animationRef.current.kill();
            }

            // Reset position
            gsap.set(content, { x: 0 });

            const containerWidth = container.offsetWidth;
            const contentWidth = content.scrollWidth / 2; // because we duplicate

            // If content is smaller than container, duplicate more
            let times = 2;
            if (contentWidth < containerWidth) {
                times = Math.ceil((containerWidth * 2) / content.scrollWidth);
            }

            // Duplicate content dynamically
            content.innerHTML = "";
            const repeatedTopics = Array(times).fill(trendingTopics).flat();
            repeatedTopics.forEach((topic, index) => {
                const span = document.createElement("span");
                span.textContent = topic;
                span.className = "mx-8 text-lg font-semibold inline-block";
                content.appendChild(span);
            });

            // Animate
            animationRef.current = gsap.to(content, {
                x: -content.scrollWidth / 2,
                duration: 20,
                repeat: -1,
                ease: "linear"
            });
        };

        setupTicker();
        window.addEventListener("resize", setupTicker);

        return () => {
            if (animationRef.current) animationRef.current.kill();
            window.removeEventListener("resize", setupTicker);
        };
    }, []);

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
            <div ref={tickerContainerRef} className="bg-black text-white py-2 overflow-hidden relative">
                <div ref={tickerRef} className="flex whitespace-nowrap"></div>
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
