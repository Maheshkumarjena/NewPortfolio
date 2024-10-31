"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Page = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const [sentStatus, setSentStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target; // corrected from 'user_name' to 'name'
    setFormData({ ...formData, [name]: value }); // updates based on the input name
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fpwhfyq", // replace with your EmailJS service ID
        "template_2uv4rde", // replace with your EmailJS template ID
        formData,
        "o3U_mhQSFPU9sg57u" // Replace with your actual EmailJS Public Key (found in EmailJS dashboard as 'User ID')
      )
      .then(
        (response) => {
          setSentStatus("Message sent successfully!");
          setTimeout(() => {
            setFormData({ user_name: "", user_email: "", user_message: "" });
            setSentStatus(" ");
          }, 2000);
          // clear the form
        },
        (error) => {
          setSentStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <section className="text-gray-600 min-h-[100vh] body-font bg-transparent">
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div className="md:w-1/3 w-full">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
              Contact Me
            </h1>
            <p className="leading-relaxed text-xl text-gray-900">
              We are here to assist you! If you have any questions or need
              assistance, please feel free to reach out to us.
              <br />
              <br />
              You can also email us at
              <a
                href="/maheshkumarjena46@gmail.com"
                className="font-semibold border-b-4 border-green-400"
              >
                maheshkumarjena46@gmail.com
              </a>
            </p>
          </div>
          <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">
              Contact Form
            </h1>
            <form onSubmit={handleSubmit} id="submit-contact-form">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="user_name"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="user_email"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="user_message"
                    className="leading-7 py-4 text-lg text-gray-900"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="user_message"
                    name="user_message"
                    value={formData.user_message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                >
                  Send Message ✉
                </button>
              </div>
            </form>
            {sentStatus && (
              <p className="mt-4 text-lg text-gray-800 font-semibold">
                {sentStatus}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
