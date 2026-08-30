import React from "react";

function ProductCard({ product }) {
    return (
        <article className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <button aria-label="Add to wishlist" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm transition hover:scale-110">♡</button>
            </div>
            <div className="pt-4">
                <h3 className="text-sm font-semibold text-black">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <p className="mt-2 text-sm font-semibold text-black">{product.price}</p>
            </div>
        </article>
    );
}

export default ProductCard;