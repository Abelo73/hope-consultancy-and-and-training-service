import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-16 w-full flex flex-col items-center justify-center mx-auto p-8 h-screen bg-black text-white"
    >
      <div className="max-w-4xl w-full p-6  text-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          We'd love to hear from you! Whether you have questions about our
          services or just want to get in touch, feel free to reach out.
        </p>
        <form
          action="mailto:abeladisu73@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="p-3 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
