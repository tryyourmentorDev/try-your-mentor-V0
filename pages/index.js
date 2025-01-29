import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { FaChalkboardTeacher, FaFileAlt, FaLightbulb } from "react-icons/fa";
import PricingSection from "./pricing";

const testimonials = [
  {
    name: "Alice Johnson",
    text: "Alice is an incredibly talented developer. She's passionate and never settles for good enough. I worked with her for a brief time, and I am extremely impressed with her problem-solving skills and project delivery.",
    role: "Software Engineer",
    image: "src/assets/person.png",
  },
  {
    name: "Bob Smith",
    text: "Bob's mentorship has been invaluable. His guidance helped me achieve milestones I never thought were possible.",
    role: "Data Scientist",
    image: "src/assets/person.png",
  },
  {
    name: "Carla Gomez",
    text: "Carla provided me with invaluable feedback that refined my approach and boosted my confidence for interviews.",
    role: "Product Manager",
    image: "src/assets/person.png",
  },
  {
    name: "David Lee",
    text: "David's advice helped me secure a leadership role in my company.",
    role: "Full Stack Developer",
    image: "src/assets/person.png",
  },
  {
    name: "Ella Brown",
    text: "The mentorship I received was exactly what I needed to progress in my career.",
    role: "UI/UX Designer",
    image: "src/assets/person.png",
  },
  {
    name: "Frank Adams",
    text: "The mentors here are experts in their fields and truly care about your success.",
    role: "DevOps Engineer",
    image: "src/assets/person.png",
  },
  {
    name: "Grace Thompson",
    text: "The guidance I received helped me transition to a new industry smoothly.",
    role: "Business Analyst",
    image: "src/assets/person.png",
  },
  {
    name: "Hannah Lee",
    text: "The resume review sessions gave me a competitive edge during job applications.",
    role: "Software Tester",
    image: "src/assets/person.png",
  },
  {
    name: "Ian Wright",
    text: "The mock interviews were tailored to my specific needs and helped me perform confidently.",
    role: "Machine Learning Engineer",
    image: "src/assets/person.png",
  },
  {
    name: "Jackie Miller",
    text: "The mentorship I received here has been a turning point in my career.",
    role: "Data Engineer",
    image: "src/assets/person.png",
  },
  {
    name: "Kelly Morgan",
    text: "The personalized advice and strategies have been incredibly helpful for my growth.",
    role: "Cloud Engineer",
    image: "src/assets/person.png",
  },
  {
    name: "Liam Carter",
    text: "The mentors are always willing to go the extra mile to ensure your success.",
    role: "AI Researcher",
    image: "src/assets/person.png",
  },
  {
    name: "Mia Davis",
    text: "I gained valuable insights and practical knowledge from the sessions.",
    role: "Frontend Developer",
    image: "src/assets/person.png",
  },
];

const animationVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
};

const MentoringStart = () => {
  const router = useRouter();

  return (
    <main className="w-full">
      {/* Hero Section */}
      <motion.section className="bg-[#5e17eb] text-white py-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16">
          {/* Text Content */}
          <div
            className="md:w-3/5 lg:w-1/2 flex flex-col justify-center"
            style={{ marginLeft: "2rem" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Find your mentor <br />
              in the IT industry <br />
              and get ahead
            </h1>
            <p className="text-lg font-light">
              Discover experienced mentors to accelerate your IT career growth.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-2/5 lg:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/group.jpg"
              alt="Mentoring"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="mt-64 bg-gray-50 py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={animationVariants}
      >
        <div className="container mx-auto">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "2.5rem",
            }}
          >
            What do you need help with in your career?
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Work with a vetted expert who can help prepare and guide you through
            your biggest career challenges.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <ServiceCard
              icon={<FaChalkboardTeacher size={40} />}
              color="#e5d4ff"
              title="Mock Interviews"
              description="Prepare for interviews with confidence. Get real-time feedback from experienced mentors to refine your skills."
              onClick={() => router.push("/mentors")}
            />
            <ServiceCard
              icon={<FaFileAlt size={40} />}
              color="#d4f6ff"
              title="Resume Reviews"
              description="Make your resume stand out! Let our experts review and enhance your resume to match industry standards."
              onClick={() => router.push("/resume-review")}
            />
            <ServiceCard
              icon={<FaLightbulb size={40} />}
              color="#fff5cc"
              title="Career Coaching"
              description="Upskill yourself with personalized learning plans tailored to your career aspirations."
              onClick={() => console.log("Native Site Editor clicked")}
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Just exploring?{" "}
            <a href="/mentors" className="text-blue-600 hover:underline">
              Browse all our available Mentors &rarr;
            </a>
          </p>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="mt-64 relative bg-gray-100 py-6 border-t border-gray-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={animationVariants}
      >
        <div className="container mx-auto">
          <h2
            className="text-center mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "2.5rem",
            }}
          >
            Hear from the happy students
            <br />
            who trust us!
          </h2>
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex space-x-6"
              initial={{ x: 0 }}
              animate={{ x: -600 }}
              transition={{
                ease: "linear",
                duration: 20,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px] p-6 rounded-lg shadow-md"
                  style={{
                    background: "linear-gradient(135deg, #5e17eb, #ade6fb)",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p className="italic text-lg text-white mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="ml-3">
                      <p className="font-bold text-gray-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-800">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        variants={animationVariants}
      >
        <PricingSection />
      </motion.section>
    </main>
  );
};

export default MentoringStart;
