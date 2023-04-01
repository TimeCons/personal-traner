import React from "react";
import "./style.css";

interface PricingTabProps {
  title: string;
  description: string;
  price: number;
  voices: string[];
  rowed?: boolean;
  nolimit?: boolean;
  onClick?: () => void;
}

export default function PricingTab({
  title,
  price,
  voices,
  description,
  rowed,
  nolimit,
  onClick,
}: PricingTabProps) {
  return (
    <div className={`${rowed ? "pricing-banner-rowed" : "pricing-banner"}`}>
      <div className="pricing-banner-title">
        <h3>{title}</h3>
        <p style={{ color: "gray", fontSize: 13 }}>{description}</p>
      </div>
      <div className="pt-price-container">
        <p className="pt-price">{price} €</p>
        <p style={{ color: "gray", margin: 0 }}>al mese</p>
      </div>
      <div className="pt-voices">
        {voices.map((voice, index) => (
          <>
            <p key={index}>{voice}</p>
            <hr />
          </>
        ))}
      </div>
      <button onClick={onClick} className="pricing-banner-button">
        Scopri di più
      </button>

      {!nolimit && (
        <p
          style={{
            color: "gray",
            fontSize: 11,
            width: "50%",
            margin: "0 auto",
          }}
        >
          ogni pacchetto prevede un vincolo di almeno 3 mesi
        </p>
      )}
    </div>
  );
}
