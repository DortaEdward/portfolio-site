import './styles.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
import Hamburger from '../hamburger';

export default function Navbar(){

  const [showHamburger, setShowHamburger] = useState(false);

  return(
    <div className='navbar'>
      <div className='desktop'>
        <ul className='nav-links'>
          <li className='nav-link home-link'><Link to='home' spy={true} smooth={true}>Home</Link></li>
          <li className='nav-link work-link'><Link to='work' spy={true} smooth={true}>Work</Link></li>
          <li className='nav-link contact-link'><Link to='contact' spy={true} smooth={true}>Contact</Link></li>
        </ul>
        <a href='Edward_Dorta_Resume.pdf' className='resume' download>Download Resume</a>
      </div>
      {/* <div className='mobile'>
        <Hamburger />
      </div> */}
    </div>
  )
}