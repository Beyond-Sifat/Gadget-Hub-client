"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'

export default function detailsPage() {
    const { id } = useParams()
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://next-level-server.vercel.app/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
                setLoading(false);
            });
    }, [id])

    if (loading) {
        return <p className="text-center mt-10">Loading product details...</p>;
    }

    if (!product) {
        return <p className="text-center mt-10">Product not found.</p>;
    }
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Product Image */}
                <div className="md:w-1/2">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded"
                    />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 flex flex-col justify-start">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold mb-4">${product.price}</p>

                    {/* You can add buttons like Add to Cart here */}
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 w-full md:w-auto">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
