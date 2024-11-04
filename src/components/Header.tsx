import React from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="header">
    <p>{title}</p>
  </header>
);

export default Header;
