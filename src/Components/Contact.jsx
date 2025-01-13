import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hsua2b",
        "template_v1cih09",
        e.target,
        "8o7fSA2vqNqz4KiN8"
      )

      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="flex min-h-[70vh] min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center w-full p-6 space-y-6 md:p-14">
        <h1 className="text-4xl font-light text-gray-950 dark:text-white md:text-6xl">
          Get in Touch
        </h1>

        <div className="flex flex-col items-center justify-center w-2/3 gap-4">
          <form
            onSubmit={handleSubmit}
            className="w-full gap-2 space-y-6 md:gap-3"
          >
            <div className="flex flex-col flex-wrap items-stretch justify-between w-full mb-[-1rem] md:mb-0 md:flex-row gap-2 md:gap-3">
              <div className="flex flex-col w-full md:flex-1">
                <label
                  htmlFor="name"
                  className="mb-1 text-sm text-gray-700 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="p-2 border-gray-300 rounded-lg form-input dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="flex flex-col w-full md:flex-1">
                <label
                  htmlFor="email"
                  className="mb-1 text-sm text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="p-2 border-gray-300 rounded-lg dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col flex-wrap items-stretch justify-between w-full gap-2 md:flex-row md:gap-3">
              <div className="flex flex-col w-full md:flex-1">
                <label
                  htmlFor="phone"
                  className="mb-1 text-sm text-gray-700 dark:text-gray-200"
                >
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Mobile Number"
                  className="p-2 border-gray-300 rounded-lg form-input dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="flex flex-col w-full md:flex-1  mb-[-1rem] md:mb-0">
                <label
                  htmlFor="subject"
                  className="mb-1 text-sm text-gray-700 dark:text-gray-200"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter Subject Of The Mail"
                  className="p-2 border-gray-300 rounded-lg form-input dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col  mt-[-1rem] ">
              <label
                htmlFor="message"
                className="mb-1 text-sm text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="resize-none h-40 md:h-52 p-3 w-full text-[1rem] leading-tight rounded-lg border border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none dark:bg-gray-800 dark:text-white"
                placeholder="Enter Your Message Here..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>

          {status && (
            <p className="mt-4 text-center text-green-600 dark:text-green-400">
              {status}
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
