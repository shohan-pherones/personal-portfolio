import { useRef } from "react";
import { useGsapHeadline, useGsapStagger } from "../lib/gsap";

import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const getInTouchRef = useRef(null);
  const formItem1 = useRef(null);
  const formItem2 = useRef(null);
  const formItem3 = useRef(null);
  const formItem4 = useRef(null);

  const formItemArr = [formItem1, formItem2, formItem3, formItem4];

  useGsapHeadline(getInTouchRef);
  useGsapStagger(formItemArr);

  // Form submission
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          navigate("/successful");
        },
        () => {
          navigate("/failed");
        }
      );
  };

  return (
    <div className="contact container mx-auto mt-40">
      <h2 className="section-title" ref={getInTouchRef}>
        Get in touch
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20"
      >
        <input
          ref={formItem1}
          type="text"
          placeholder="Your name"
          name="fullname"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <input
          ref={formItem2}
          type="email"
          placeholder="Your email"
          name="email"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <textarea
          ref={formItem3}
          cols="30"
          rows="1"
          placeholder="Your message"
          name="message"
          required
          className="bg-transparent border py-10 px-20 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 resize-none"
        />
        <input
          ref={formItem4}
          type="submit"
          value="Send message"
          className="uppercase py-10 px-20 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
        />
      </form>
    </div>
  );
};

export default Contact;
