import './menu.css'
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="menu">
      <a className='social' href="https://github.com/cauaolivio">
        <BsGithub color='#FFF' size={24} />
      </a>
      <a className='social' href="https://instagram.com/cauaolivio">
        <BsInstagram color='#FFF' size={24} />
      </a>
      <Link className='menu-item' to="/links">
        Meus Links
      </Link>
    </div>
  )
}