import React from "react";

export default function About() {
    return (
        <div className="pt-20 min-h-screen bg-gray-50 px-4 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6 text-center">About SourabhShop</h1>
            <p className="text-gray-600 max-w-2xl text-center mb-8">
                At SourabhShop, we believe shopping should be simple, convenient, and enjoyable. Our mission is to bring the best products to your doorstep with ease and reliability. Whether you’re shopping for essentials or looking for something special, we are here to make your experience seamless and satisfying.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full mb-10">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Wide range of products at competitive prices</li>
                    <li>Fast and reliable delivery service</li>
                    <li>Secure payment options</li>
                    <li>Customer satisfaction is our top priority</li>
                    <li>24/7 customer support</li>
                </ul>
            </div>

            <div className="max-w-3xl w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold text-lg">Jane Doe</h3>
                        <p className="text-gray-600">Founder & CEO</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-semibold text-lg">John Smith</h3>
                        <p className="text-gray-600">Head of Operations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
