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
      background: 'rgba(10, 10, 14, 0.65)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      zIndex: 100,
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        fontSize: '1.75rem',
        fontWeight: '800',
        letterSpacing: '-0.5px',
        background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #e879f9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Auguste Ventures
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                color: isActive ? '#c084fc' : 'rgba(255, 255, 255, 0.7)',
                fontWeight: 600,
                fontSize: '1rem',
                position: 'relative',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0',
              }}
              onMouseOver={(e) => e.target.style.color = '#fff'}
              onMouseOut={(e) => e.target.style.color = isActive ? '#c084fc' : 'rgba(255, 255, 255, 0.7)'}
            >
              {link.name}
              {isActive && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #818cf8, #c084fc)',
                  borderRadius: '2px',
                  boxShadow: '0 2px 10px rgba(192, 132, 252, 0.5)'
                }} />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
