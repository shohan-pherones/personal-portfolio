const Contact = () => {
  return (
    <div className="contact container mx-auto mt-20">
      <h2 className="section-title">Get in touch</h2>
      <form className="mt-20 grid grid-cols-2 gap-10">
        <input
          type="text"
          placeholder="Your name"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <input
          type="email"
          placeholder="Your email"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <textarea
          cols="30"
          rows="1"
          placeholder="Your message"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 resize-none"
        />
        <button
          type="submit"
          className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
