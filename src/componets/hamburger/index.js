import './styles.css';
import { Link } from 'react-scroll';
import { useState } from 'react';
export default function Hamburger(){
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  }
  return(
    <div className='ham-menu' onClick={toggleActive} >
      <svg viewBox="0 0 24 24"className="ham-menu-icon">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      {
        active ?
        <div className='ham-links-container'>
          <ul className='ham-links'>
              <li className='ham-link home-link'><Link to='home' spy={true} smooth={true} onClick={toggleActive} >Home</Link></li>
              <li className='ham-link work-link'><Link to='work' spy={true} smooth={true} onClick={toggleActive} >Work</Link></li>
              <li className='ham-link contact-link'><Link to='contact' spy={true} smooth={true} onClick={toggleActive} >Contact</Link></li>
            </ul>
          <a href='Updated-Resume.pdf' className='resume' download>Download Resume</a>
        </div>
      :
      <div></div>
      }
    </div>
  )
}