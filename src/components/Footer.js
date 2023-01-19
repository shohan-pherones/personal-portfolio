import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="my-40 text-center text-white/50">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <HashLink
          smooth
          to="#home"
          className="link hover:text-white duration-500"
        >
          Md. Shohanur Rahman
        </HashLink>
        . Crafted by yours truly
      </p>
    </footer>
  );
};

export default Footer;
