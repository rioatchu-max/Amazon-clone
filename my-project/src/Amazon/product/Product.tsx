import React, { useEffect, useState } from "react";

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
};

type ProductProps = {
  selectedCategory: string;
  searchTerm: string;
  addToCart: (product: { id: number; title: string; price: number; image: string }) => void;
};

export default function ProductList({ selectedCategory, searchTerm, addToCart }: ProductProps) {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter((p) => {
    const categoryMatch = selectedCategory === "all" || p.category === selectedCategory;
    const searchMatch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="product-container" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "15px", marginTop: "20px" }}>
      {filteredProducts.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>₹{product.price}</strong></p>
          <button onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.thumbnail })}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

