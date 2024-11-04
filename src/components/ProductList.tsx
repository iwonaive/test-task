import React from "react";
import ProductCard from "./ProductCard.tsx";
import { Product } from "../data/types";
import "./ProductList.css";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <React.Fragment key={product.id}>
        <ProductCard product={product} />
      </React.Fragment>
    ))}
  </div>
);

export default ProductList;
