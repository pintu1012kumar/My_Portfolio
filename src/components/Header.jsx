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
        <header className={`px-[4%] z-50 fixed top-0 left-0 bg-[#585757] right-0 lg:px-[10%] py-4 ${isNavActive ? '': 'border-b border-[#a2a2a2]'}`}>
            <nav className='flex justify-between items-end'>
                <h1 className='text-3xl font-medium'>Pintu</h1>

                <ul className={`items-center gap-[3rem] lg:flex 
                    ${isNavActive ? 'absolute w-full top-[4.26rem] bg-[#222] border-b border-t left-0 p-7 px-[4%] lg:px-[10%] grid grid-cols-3 rounded-b-2xl transition-all': 'hidden'}`}>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="hero"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-estate"></i> 
                            <span className='hover-nav'>Home</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="about"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-user"></i>
                            <span className='hover-nav'>About</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="skills"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-file-alt"></i>
                            <span className='hover-nav'>Skills</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="projects"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-scenery"></i>
                            <span className='hover-nav'>Projects</span>
                        </li>
                    </Link>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}
                        to="contact"
                        className="navbar--content"
                    >
                        <li className='nav-list'>
                            <i className="uil uil-message"></i>
                            <span className='hover-nav'>Contact</span>
                        </li>
                    </Link>
                </ul>

                <div onClick={toggleNav} className='cursor-pointer lg:hidden block text-xl'>
                    {
                        isNavActive ? <i class="ri-close-large-line"></i>: <i class="ri-menu-line"></i>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header
