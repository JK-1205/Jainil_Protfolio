import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ojb5as", // ✅ Your Service ID
        "template_orzash7", // ✅ Your Template ID
        form.current,
        "wJHpvQd6mvwu9kyEK" // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.error("❌ Failed:", error);
          alert("❌ Message failed. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white px-6 py-16"
    >
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide relative">
        <span className="inline-block relative after:absolute after:left-1/2 after:bottom-[-10px] after:h-[4px] after:w-12 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 after:content-['']">
          <span className="text-white">Contact </span>
          <span className="text-neutral-400">Me</span>
        </span>
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto flex flex-col gap-6 bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg"
      >
        {/* Name Field */}
        <div className="relative">
          <label className="absolute -top-3 left-4 bg-black px-2 text-sm text-cyan-400 rounded-full">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full mt-3 px-4 py-3 rounded-lg bg-neutral-900 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <label className="absolute -top-3 left-4 bg-black px-2 text-sm text-cyan-400 rounded-full">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full mt-3 px-4 py-3 rounded-lg bg-neutral-900 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <label className="absolute -top-3 left-4 bg-black px-2 text-sm text-cyan-400 rounded-full">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Type your message here..."
            className="w-full mt-3 px-4 py-3 rounded-lg bg-neutral-900 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-cyan-400/40 transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
