import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call here
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl mx-auto ">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Message Us</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border rounded outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Id"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border rounded outline-none focus:ring-2 focus:ring-red-400"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="p-3 border rounded outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 border rounded outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="md:col-span-2 p-3 border rounded outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <div className="md:col-span-2 mt-2">
          <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
        </div>

        <button
          type="submit"
          className="md:col-span-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
