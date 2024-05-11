import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`mobile:px-[11%] px-[7%] relative lg:py-4 py-3 flex items-center justify-between text-[1.1rem] ${navActive? 'bg-[#f1f1f1]' : ''}`}>
      <header>
        <h1 className='text-3xl font-medium'>Wasif</h1>
      </header>
      <ul className={`lg:flex text-[1.1rem] gap-10 ${navActive ? 'absolute top-[5rem] h-[500px] left-0 bg-[#f1f1f1] border space-y-5 w-full p-3 mobile:px-[11%] px-[7%]': 'hidden'}`}>
      <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutmMe"
              className="navbar--content"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="projects"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contactMe"
              className="navbar--content"
            >
              Contact
            </Link>
          </li>
      </ul>
      <section className='flex gap-10 items-end'>
        <Link
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="contactMe"
          className="bg-blue-700 cursor-pointer py-1.5 px-6 rounded-full text-white hidden lg:block"
        >
          Get In Touch
        </Link>
        <button className='text-4xl lg:hidden mt-4' onClick={toggleNav}>
            {
              navActive ? <span><ion-icon name="close-outline"></ion-icon></span> : <span><ion-icon name="menu-outline"></ion-icon></span>
            }
        </button>
      </section>
    </nav>
  )
}

export default Navbar

