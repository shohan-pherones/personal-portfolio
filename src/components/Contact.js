import { useRef } from "react";
import { useGsapHeadline, useGsapStagger } from "../lib/gsap";

const Contact = () => {
  const getInTouchRef = useRef(null);
  const formItem1 = useRef(null);
  const formItem2 = useRef(null);
  const formItem3 = useRef(null);
  const formItem4 = useRef(null);

  const formItemArr = [formItem1, formItem2, formItem3, formItem4];

  useGsapHeadline(getInTouchRef);
  useGsapStagger(formItemArr);

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <h2 className="section-title" ref={getInTouchRef}>
        Get in touch
      </h2>
      <form className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <input
          ref={formItem1}
          type="text"
          placeholder="Your name"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <input
          ref={formItem2}
          type="email"
          placeholder="Your email"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <textarea
          ref={formItem3}
          cols="30"
          rows="1"
          placeholder="Your message"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 resize-none"
        />
        <button
          ref={formItem4}
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
