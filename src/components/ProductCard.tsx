import React from "react";
import { Product } from "../data/types";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="product-card">
    <img
      src={product.image}
      alt={product.title}
      className="product-card__image"
    />
    <h3 className="product-card__title">{product.title}</h3>
    <div className="product-card__description">
      <p>
        Pojemność (kg):
        <span className="product-card__data">{product.description[0]}</span>
      </p>
      <p>
        Wymiary (GxSxW):
        <span className="product-card__data">{product.description[1]}</span>
      </p>
      <p>
        Funkcje: <span className="product-card__data">{product.description[2]}</span>
      </p>
      <div className="product-card__ecoinfo">
        <p>klasa energetyczna</p>
        <img src={product.icon} className="product-card__icon" alt="Eco Icon" />
      </div>
      <p>Cena obowiązuje: {product.description[3]}</p>
    </div>
    <img src={product.price} className="product-card__price" alt="Product Price" />
    <button className="product-card__button">wybierz</button>
  </div>
);

export default ProductCard;

// here I should add useState, handleButtonClick, selected button + onClick, for now it's only hover on btn