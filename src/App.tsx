import React from "react";
import Header from "./components/Header.tsx";
import Search from "./components/Search.tsx";
import ProductList from "./components/ProductList.tsx";
import products from "./data/products.json";
import "./App.css";
import Dropdowns from "./components/Dropdowns.tsx";
import ShowMore from "./components/ShowMore.tsx";
import ResultsNumber from "./components/ResultsNumber.tsx";

const App: React.FC = () => {
  return (
    <>
      <Header title="Wybierz urządzenie" />
      <Search />
      <Dropdowns />
      <ResultsNumber />
      <ProductList products={products} />
      <ShowMore />
    </>
  );
};

export default App;
