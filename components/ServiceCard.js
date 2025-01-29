// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ icon, title, description, color, onClick }) => (
  <div
    className="flex flex-col items-center justify-center p-6 rounded-xl text-center transition transform hover:scale-105 shadow-sm"
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    {icon && <div className="text-3xl mb-4 text-gray-700">{icon}</div>}
    <h3 className="text-lg font-bold">{title}</h3>
    {description && <p className="text-gray-700 mt-2">{description}</p>}
  </div>
);

export default ServiceCard;
