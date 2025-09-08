import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";

// Icons
import { ShoppingBag, Tag, Package, CreditCard } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/CheckOut";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const iconsRef = useRef([]);

  // Ensure refs are assigned properly
  const setIconRef = (el, index) => {
    iconsRef.current[index] = el;
  };

  useEffect(() => {
    // Wait a tick to ensure refs are assigned
    const timeout = setTimeout(() => {
      if (iconsRef.current.every(ref => ref !== null)) {
        const tl = gsap.timeline({
          onComplete: () => {
            setShowContent(true);
          }
        });

        // Animate icons one by one
        iconsRef.current.forEach((el, index) => {
          tl.from(el, {
            opacity: 0,
            y: -20,
            scale: 0.5,
            duration: 0.6,
            ease: "bounce.out"
          }, index * 0.3);
        });

        // Fade out splash screen
        tl.to(".splash-container", {
          opacity: 0,
          scale: 1.5,
          duration: 1,
          ease: "power2.inOut"
        }, "+=0.5");
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Splash Screen */}
      {!showContent && (
        <div className="splash-container fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="text-4xl font-bold text-black mb-6">SourabhShop</div>
          <div className="flex items-center space-x-6">
            <div ref={el => setIconRef(el, 0)}>
              <ShoppingBag className="w-10 h-10 text-black" />
            </div>
            <div ref={el => setIconRef(el, 1)}>
              <Tag className="w-10 h-10 text-black" />
            </div>
            <div ref={el => setIconRef(el, 2)}>
              <CreditCard className="w-10 h-10 text-black" />
            </div>
            <div ref={el => setIconRef(el, 3)}>
              <Package className="w-10 h-10 text-black" />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <>
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
