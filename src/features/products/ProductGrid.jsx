import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Dri-FIT Training T-Shirt",
    category: "Men's T-Shirt",
    price: "₹1,499",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=70",
  },
  {
    id: 2,
    name: "Club Fleece Hoodie",
    category: "Men's Hoodie",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=70",
  },
  {
    id: 3,
    name: "Performance Joggers",
    category: "Men's Joggers",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=70",
  },
  {
    id: 4,
    name: "Tech Fleece Jacket",
    category: "Men's Jacket",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=70",
  },
  {
    id: 5,
    name: "Air Training Shoes",
    category: "Men's Footwear",
    price: "₹7,999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=70",
  },
  {
    id: 6,
    name: "Sports Track Jacket",
    category: "Men's Jacket",
    price: "₹2,799",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=70",
  },
  {
    id: 7,
    name: "Heritage Training Backpack",
    category: "Men's Bag",
    price: "₹2,199",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=70",
  },
  {
    id: 8,
    name: "Club Sports Cap",
    category: "Men's Accessories",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=70",
  },
];

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;