import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useSectionTitleReveal } from "../hooks/gsap";

const Contact = () => {
  // form submission
  const form = useRef();

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
          toast.success("Your message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed, please try again later!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );

    // reset values
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  const contactTitleRef = useRef(null);

  useSectionTitleReveal(contactTitleRef);

  return (
    <div className="contact container mx-auto mt-40" id="contact">
      <div className="overflow-hidden">
        <h2 className="section-title" ref={contactTitleRef}>
          Let's Talk
        </h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20"
      >
        <input
          type="text"
          placeholder="Write your name"
          name="fullname"
          required
          className="fullname bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <input
          type="email"
          placeholder="Write your email"
          name="email"
          required
          className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500"
        />
        <textarea
          cols="30"
          rows="1"
          placeholder="Write your message"
          name="message"
          required
          className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 resize-none"
        />
        <input
          type="submit"
          value="Send message"
          className="uppercase py-16 px-28 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
        />
      </form>
    </div>
  );
};

export default Contact;
