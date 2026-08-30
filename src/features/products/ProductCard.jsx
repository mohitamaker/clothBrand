import React from "react";

function ProductCard({ product }) {
    return (
        <article className="group">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {product.discount && <span className="absolute left-0 top-0 bg-[#b91c1c] px-3 py-2 text-xs font-bold text-white">{product.discount}</span>}
                <button aria-label="Add to wishlist" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg shadow-sm transition hover:scale-110">♡</button>
            </div>
            <div className="pt-3">
                <h3 className="text-xs font-semibold text-black sm:text-sm">{product.name}</h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">{product.category}</p>
                <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs font-semibold text-red-600 sm:text-sm">{product.price}</span>
                    {product.originalPrice && <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>}
                </div>
            </div>
        </article>
    );
}

export default ProductCard;