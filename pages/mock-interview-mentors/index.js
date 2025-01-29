import React from "react";
import MentorCard from "../../components/MentorCard";
const MockInterviewMentors = () => {
  const mentors = [
    {
      name: "Enoch Silva",
      title: "Quality Engineering Lead | Sysco (ex-Pickme)",
      rating: 5.0,
      sessions: 9,
      description:
        "Ex-Amazon Quality Engineering Lead with 8 years of experience with experience working at Meta and Apple.",
      skills: ["DynamoDB", "Python", "+10 more"],
      image: "/assets/enoch.jpg", // Use public assets
    },
    {
      name: "Chanaka Withanage",
      title: "Associate Technical Lead | Sysco (ex-CodeGen)",
      rating: 5.0,
      sessions: 4,
      description:
        "A Software Engineer with over 5 years of experience working for TikTok, Expedia, and other mid-size and big tech companies.",
      skills: ["DynamoDB", "Git", "+5 more"],
      image: "/assets/chanaka.jpg",
    },
    {
      name: "Sudesh Sembapperuma",
      title: "Senior Software Engineer | Sysco",
      rating: 5.0,
      sessions: 4,
      description:
        "A Software Engineer with over 5 years of experience working for TikTok, Expedia, and other mid-size and big tech companies.",
      skills: ["DynamoDB", "Git", "+5 more"],
      image: "/assets/sudesh.jpg",
    },
    {
      name: "Shanuka Meegasdeniya",
      title: "Associate Quality Engineering Lead | Sysco",
      rating: 5.0,
      sessions: 4,
      description:
        "A Software Engineer with over 5 years of experience working for TikTok, Expedia, and other mid-size and big tech companies.",
      skills: ["DynamoDB", "Git", "+5 more"],
      image: "/assets/shanuka.jpg",
    },
  ];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Mock Interview Coaches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </main>
  );
};

export default MockInterviewMentors;
