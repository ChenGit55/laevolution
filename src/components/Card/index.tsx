import Image from "next/image";
import "./card.css";
import React from "react";

interface CardProps {
  primaryColor?: string;
  descriptionColor?: string;
  hoverColor?: string;
  image?: string; // Adicione novas propriedades conforme necessário
}
const Card: React.FC<CardProps> = ({ image }) => {
  return (
    <div className="base-card">
      <div className="card-img-container">
        {image && (
          <Image
            src={image}
            className="card-img"
            width={500}
            height={500} // Defina a altura conforme necessário
            alt="card"
          />
        )}
      </div>
      <div className="card-description">
        <h5>Soccer</h5>
      </div>
    </div>
  );
};

export default Card;
