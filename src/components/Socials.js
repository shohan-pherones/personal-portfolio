const Socials = () => {
  return (
    <div className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] origin-left -rotate-90 text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50">
      <a
        href="https://www.facebook.com/spectra.shohan"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        Facebook
      </a>
      <a
        href="https://www.instagram.com/spectra.shohan"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        Instagram
      </a>
      <a
        href="https://twitter.com/elysianshohan"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/shohan-pherones"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/shohan-pherones"
        target="_blank"
        className="hover:text-cyan-400 duration-500"
      >
        GitHub
      </a>
    </div>
  );
};

export default Socials;
