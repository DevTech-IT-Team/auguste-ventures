import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <header className="site-header">
      <div className="promo-bar">
        <span>Unlock Innovation at Auguste Ventures!</span>
        <Link to="/services" className="promo-cta">Start Growing</Link>
      </div>

      <nav className="main-nav">
        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link${isActive ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link to="/contact-us" className="nav-contact-btn" onClick={() => setOpen(false)}>
          <Phone size={16} />
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
