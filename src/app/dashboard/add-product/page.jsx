"use client";

import { useState } from "react";

export default function ProductForm() {
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect data using FormData
        const formData = new FormData(e.target);
        const entries = Object.fromEntries(formData.entries());

        // Add current date
        entries.createdAt = new Date().toISOString();

        fetch("https://next-level-server.vercel.app/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(entries),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Product added:", data);
                setMessage("Product added successfully!");
                e.target.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
                setMessage("Server error. Try again later.");
            });
    };

    return (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium mb-1">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        step="0.01"
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium mb-1">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        required
                        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                >
                    Add Product
                </button>
            </form>

            {message && (
                <p className="mt-4 text-center font-medium text-green-600">{message}</p>
            )}
        </div>
    );
}
