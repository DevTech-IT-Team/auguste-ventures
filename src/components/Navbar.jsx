import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      background: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      zIndex: 100,
    }}>
      <div style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #818cf8, #c084fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Auguste Ventures
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              textDecoration: 'none',
              color: location.pathname === link.path ? '#c084fc' : '#cbd5e1',
              fontWeight: 500,
              transition: 'color 0.2s ease',
            }}
            onMouseOver={(e) => e.target.style.color = '#fff'}
            onMouseOut={(e) => e.target.style.color = location.pathname === link.path ? '#c084fc' : '#cbd5e1'}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
