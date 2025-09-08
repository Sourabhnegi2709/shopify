import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form data:", formData);
        // You can send this data to your API or backend here
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center px-4">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-gray-600 mb-8 text-center max-w-lg">
                Have questions or feedback? Fill out the form below and we’ll get back to you as soon as possible.
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                {submitted && (
                    <div className="mb-4 text-green-600 text-center font-medium">
                        Thank you for contacting us!
                    </div>
                )}
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Your name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Write your message..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
