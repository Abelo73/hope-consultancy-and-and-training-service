import React from "react";

const Service = () => {
  return (
    <section id="services" className="bg-black py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            We offer a range of consultancy and training services tailored to
            meet your needs in economic development, financial management, and
            more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-blue-400 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Purchasing Plan and Decisions",
    description:
      "Expert guidance on making informed purchasing decisions and strategic planning to optimize your resources.",
  },
  {
    title: "Organization Structure Design and Consultancy",
    description:
      "Tailored advice on designing and implementing effective organizational structures to enhance operational efficiency.",
  },
  {
    title: "Marketing Strategy Consultancy",
    description:
      "Develop robust marketing strategies to effectively reach your target audience and drive business growth.",
  },
  {
    title: "Leadership Skill Improvement Strategy",
    description:
      "Enhance your leadership skills with personalized strategies and training to lead your team more effectively.",
  },
  {
    title: "Investment Choice and Decision",
    description:
      "Guidance on making smart investment choices and decisions to maximize returns and manage risks.",
  },
  {
    title: "Human Resources Management Strategy",
    description:
      "Develop and implement effective HR strategies to manage and develop your workforce effectively.",
  },
  {
    title: "Financial Intermediation and Business Service Training",
    description:
      "Training in financial intermediation and business services to enhance your skills and knowledge.",
  },
  {
    title: "Entrepreneurship Skills and Training",
    description:
      "Equip yourself with essential entrepreneurship skills and knowledge to start and grow your own business.",
  },
  {
    title: "Electronic Management Skills Training and Computer Maintenance",
    description:
      "Learn how to manage electronic systems and perform basic computer maintenance to keep your tech running smoothly.",
  },
  {
    title: "Communication and Customer Handling Skills",
    description:
      "Improve your communication skills and learn effective techniques for handling customers and clients.",
  },
  {
    title: "Business Plan and Financial Breakdown Forecasting",
    description:
      "Develop comprehensive business plans and financial forecasts to guide your business strategy and planning.",
  },
  {
    title: "Budget Plan and Preparation",
    description:
      "Create effective budget plans and preparations to manage your finances and resources efficiently.",
  },
  {
    title: "Research and Software Skill Training and Other Business Services",
    description:
      "Gain skills in research and software applications and explore other business services to enhance your capabilities.",
  },
  {
    title: "Mind Setting",
    description:
      "Develop a positive mindset and approach to overcome challenges and achieve personal and professional growth.",
  },
  {
    title: "Marriage and Family Counseling",
    description:
      "Receive expert counseling and support for marriage and family-related issues to build stronger relationships.",
  },
  {
    title: "Self-Help Small Group Saving and Capacity Building Service",
    description:
      "Engage in self-help small group savings and capacity-building services to enhance community support and development.",
  },
];

export default Service;
