import React from "react";
import "./ShowMore.css";

interface ShowMoreProps {
  onClick?: () => void; // Opcjonalna funkcja do obsługi kliknięcia
}

const ShowMore: React.FC<ShowMoreProps> = ({ onClick }) => {
  return (
    <button className="show-more" onClick={onClick}>
      Pokaż więcej <span className="arrow">▼</span>
    </button>
  );
};

export default ShowMore;
