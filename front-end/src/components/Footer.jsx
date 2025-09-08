import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white">SourabhShop</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Minimalistic e-commerce for modern shoppers.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-white mb-2">Quick Links</h3>
                    <Link to="/" className="hover:text-white">Home</Link>
                    <Link to="/products" className="hover:text-white">Shop</Link>
                    <Link to="/cart" className="hover:text-white">Cart</Link>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="font-semibold text-white mb-2">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white"><Github size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} SourabhShop. All rights reserved.
            </div>
        </footer>
    );
}
