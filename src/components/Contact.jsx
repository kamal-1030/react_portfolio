import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Track submission state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.log(error.text);
      })
      .finally(() => {
        setLoading(false); // Stop loading animation
      });

    e.target.reset();
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block mb-2 font-semibold">Name</label>
          <input
            className="w-full rounded bg-neutral-900 px-4 py-2 text-white focus:outline-none"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block mb-2 font-semibold">Email</label>
          <input
            className="w-full rounded bg-neutral-900 px-4 py-2 text-white focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            className="w-full rounded bg-neutral-900 px-4 py-2 text-white focus:outline-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </motion.div>

        {/* Animated Submit Button */}
        <motion.button
          whileHover={!loading ? { scale: 1.05 } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
          animate={loading ? { scale: [1, 1.05, 1], opacity: [1, 0.6, 1] } : {}}
          transition={{ duration: 0.5 }}
          type="submit"
          disabled={loading}
          className={`mt-4 w-full rounded px-6 py-2 font-medium text-white ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-purple-800"
            }`}
        >
          {loading ? "Sending..." : "Send"}
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
