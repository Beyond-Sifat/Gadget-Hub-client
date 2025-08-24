"use client";

import { Star, Zap, ShieldCheck, ShoppingBag } from "lucide-react";

const highlights = [
    {
        icon: <Star className="w-8 h-8 text-yellow-500" />,
        title: "Top Rated Gadgets",
        desc: "Carefully curated gadgets with thousands of positive reviews.",
    },
    {
        icon: <Zap className="w-8 h-8 text-blue-500" />,
        title: "Latest Technology",
        desc: "Stay ahead with the newest and most powerful tech products.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
        title: "Secure Warranty",
        desc: "Every product comes with full warranty and customer support.",
    },
    {
        icon: <ShoppingBag className="w-8 h-8 text-purple-500" />,
        title: "Fast Delivery",
        desc: "Get your gadgets delivered quickly to your doorstep.",
    },
];

export default function Highlight() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose <span className="text-blue-600">Gadget Hub?</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
