import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';

function Header() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    const closeMenu = () => {
        setIsNavActive(false)
    }
    
    return (
        <header className={`px-[4%] z-50 fixed top-0 left-0 right-0 bg-[#222] text-white base:px-[10%] py-4 ${isNavActive ? '': 'border-b border-[#a2a2a2]'}`}>
            <nav className='flex justify-between items-end'>
                <h1 className='text-3xl'>Wasif</h1>

                <ul className={`items-center gap-[3rem] md:flex 
                    ${isNavActive ? 'absolute w-full top-[4.1rem] bg-[#222] shadow-sm shadow-[#ccc] left-0 p-7 px-[4%] grid grid-cols-3 rounded-b-3xl transition-all': 'hidden'}`}>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="homeSection"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-estate nav-icon"></i> Home
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="aboutSection"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-user nav-icon"></i>About
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="Skills"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-file-alt nav-icon"></i>Skills
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="Projects"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-scenery nav-icon"></i>Portfolio
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="Contact"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-message nav-icon"></i>Contact
                        </li>
                    </Link>
                </ul>

                <div onClick={toggleNav} className='cursor-pointer md:hidden block'>
                    {
                        isNavActive ? <span className='text-3xl'><i className='uil uil-times nav-close'></i></span> : <span className='text-xl'><i className="uil uil-apps"></i></span>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header
