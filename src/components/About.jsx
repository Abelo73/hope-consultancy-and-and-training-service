import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl mb-8">
            At Hope Consultancy & Training, we specialize in economic
            development, financial intermediation, business investment, and
            family handling. Our mission is to provide top-notch consultancy and
            training services to help individuals and organizations achieve
            their goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">Purchasing Plan and Decisions</li>
              <li className="mb-2">
                Organization Structure Design and Consultancy
              </li>
              <li className="mb-2">Marketing Strategy Consultancy</li>
              <li className="mb-2">Leadership Skill Improvement Strategy</li>
              <li className="mb-2">Investment Choice and Decision</li>
              <li className="mb-2">Human Resources Management Strategy</li>
              <li className="mb-2">
                Financial Intermediation and Business Service Training
              </li>
              <li className="mb-2">Entrepreneurship Skills and Training</li>
              <li className="mb-2">
                Electronic Management Skills Training and Computer Maintenance
              </li>
              <li className="mb-2">
                Communication and Customer Handling Skills
              </li>
              <li className="mb-2">
                Business Plan and Financial Breakdown Forecasting
              </li>
              <li className="mb-2">Budget Plan and Preparation</li>
              <li className="mb-2">
                Research and Software Skill Training and Other Business Services
              </li>
              <li className="mb-2">Mind Setting</li>
              <li className="mb-2">Marriage and Family Counseling</li>
              <li className="mb-2">
                Self-Help Small Group Saving and Capacity Building Service
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              <strong>Mobile:</strong> +251910113849 / +251911926294
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nigatuasrat02@gmail.com"
                className="text-blue-500"
              >
                nigatuasrat02@gmail.com
              </a>
            </p>
            <p>
              <strong>License:</strong> Licensed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
