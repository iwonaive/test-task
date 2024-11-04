import React from "react";
import "./Dropdowns.css";

const Dropdowns: React.FC = () => {
  return (
    <div className="dropdowns">
      <div className="dropdown">
        <label htmlFor="sort">Sortuj po:</label>
        <select id="sort" className="dropdown__select">
          <option value="x">Popularność</option>
          <option value="y">Wszystkie</option>
          <option value="z">Cena</option>
          <option value="z">Pojemność</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="function">Funkcje:</label>
        <select id="function" className="dropdown__select">
          <option value="x">Pokaż wszystkie</option>
          <option value="y">Wszystkie</option>
          <option value="z">Drzwi AddWash</option>
          <option value="z">Panel AI Control</option>
          <option value="z">Silnik inwerterowy</option>
          <option value="z">Wyświetlacz elektroniczny</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="capacity">Klasa energetyczna:</label>
        <select id="capacity" className="dropdown__select">
          <option value="x">Pokaż wszystkie</option>
          <option value="y">Wszystkie</option>
          <option value="z">A</option>
          <option value="z">B</option>
          <option value="z">C</option>
        </select>
      </div>
      <div className="dropdown">
        <label htmlFor="energy">Pojemność:</label>
        <select id="energy" className="dropdown__select">
          <option value="x">Pokaż wszystkie</option>
          <option value="y">Wszystkie</option>
          <option value="z">9kg</option>
          <option value="z">8kg</option>
          <option value="z">10.5kg</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdowns;
