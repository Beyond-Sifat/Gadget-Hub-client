"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch products from backend
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading products...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

            {products.length === 0 ? (
                <p className="text-center">No products found.</p>
            ) : (
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
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2">
                                {product.description.length > 80
                                    ? product.description.slice(0, 90) + "..."
                                    : product.description}
                            </p>
                            <p className="font-bold mb-4">${product.price}</p>
                            <Link
                                href={`/products/${product._id}`}
                                className="mt-auto text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                            >
                                Details
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
