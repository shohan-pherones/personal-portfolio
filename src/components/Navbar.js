const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto mt-20 uppercase">
      <div className="logo">
        <h2>Md. Shohanur Rahman</h2>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <a href="#" className="link">
            My Projects
          </a>
        </li>
        <li>
          <a href="#" className="link">
            My Skills
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Read Blogs
          </a>
        </li>
        <li>
          <a href="#" className="link">
            About Me
          </a>
        </li>
        <li>
          <a href="#" className="link">
            My Resume
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
