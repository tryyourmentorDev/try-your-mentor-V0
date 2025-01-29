// src/components/PricingCard.jsx
import React from "react";

const PricingCard = ({ title, price, features, onSelect, color }) => {
  return (
    <div
      className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
      style={{ backgroundColor: color }}
    >
      <h3 className="text-2xl mb-4">{title}</h3>
      <p className="text-4xl font-extrabold mb-6">{price}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700 mb-2">
            • {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className="w-full bg-[#5e17eb] text-white py-2 px-4 rounded-md hover:bg-[#4a0bb5] transition-all"
      >
        Select Plan
      </button>
    </div>
  );
};

export default PricingCard;
