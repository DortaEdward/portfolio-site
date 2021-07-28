import './styles.css';
import { Link } from 'react-scroll';

export default function Navbar(){
  return(
    <div className='navbar'>
      <ul className='nav-links'>
        <li className='nav-link home-link'><Link to='home' spy={true} smooth={true}>Home</Link></li>
        <li className='nav-link work-link'><Link to='work' spy={true} smooth={true}>Work</Link></li>
        <li className='nav-link contact-link'><Link to='contact' spy={true} smooth={true}>Contact</Link></li>
      </ul>
      <a href='Updated-Resume.pdf' className='resume' download>Download Resume</a>
    </div>
  )
}