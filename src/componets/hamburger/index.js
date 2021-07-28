import { Link } from 'react-scroll';

export default function Hamburger(){

  return(
    <div className='ham-menu'>
      <svg viewBox="0 0 24 24"class="ham-menu-icon">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>

      <div className='ham-links'>
        <ul className='nav-links'>
            <li className='nav-link home-link'><Link to='home' spy={true} smooth={true}>Home</Link></li>
            <li className='nav-link work-link'><Link to='work' spy={true} smooth={true}>Work</Link></li>
            <li className='nav-link contact-link'><Link to='contact' spy={true} smooth={true}>Contact</Link></li>
          </ul>
        <a href='Updated-Resume.pdf' className='resume' download>Download Resume</a>
      </div>
    </div>
  )
}