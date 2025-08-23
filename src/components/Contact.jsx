const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center relative z-10">
      <h2 className="text-4xl font-bold text-purple-400">Contact Me</h2>
      <form className="max-w-md mx-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-gray-700" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-gray-700" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded bg-gray-700"></textarea>
        <button className="w-full bg-purple-500 py-3 rounded-lg hover:bg-purple-600 transition">Send</button>
      </form>
    </section>
  );
};

export default Contact;
