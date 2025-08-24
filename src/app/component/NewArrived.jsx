"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HighlightProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://next-level-server.vercel.app/highlight-products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching highlight products:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading highlighted products...</p>;
    }

    if (products.length === 0) {
        return <p className="text-center mt-10">No highlighted products found.</p>;
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Newly Arrived <span className="text-blue-600">Gadgets</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">
                                {product.description.length > 60
                                    ? product.description.slice(0, 60) + "..."
                                    : product.description}
                            </p>
                            <p className="font-bold mb-4">${product.price}</p>
                            <Link
                                href={`/products/${product._id}`}
                                className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-500 text-center"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
