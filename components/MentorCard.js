// src/components/MentorCard.jsx
import React from "react";

const MentorCard = ({ mentor }) => (
  <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
    <img
      src={mentor.image}
      alt={mentor.name}
      className="w-24 h-24 rounded-full mx-auto"
    />
    <h2 className="text-xl font-semibold">{mentor.name}</h2>
    <p className="text-gray-600">{mentor.title}</p>
    <div className="flex items-center mt-2">
      <span className="text-yellow-500">★</span>
      <span className="ml-1">
        {mentor.rating} rating ({mentor.sessions} sessions)
      </span>
    </div>
    <p className="mt-4 text-gray-700">{mentor.description}</p>
    <div className="mt-4">
      {mentor.skills.map((skill, index) => (
        <span
          key={index}
          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
        >
          {skill}
        </span>
      ))}
    </div>
    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Book now
    </button>
  </div>
);

export default MentorCard;
