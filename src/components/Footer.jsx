import { Link } from 'react-router-dom';
import { Phone, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(15, 23, 42, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '4rem 5% 2rem',
      color: '#cbd5e1',
      marginTop: 'auto',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        {/* Brand & Phone CTA */}
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            margin: '0 0 1rem 0',
            color: '#fff',
          }}>
            Auguste Ventures
          </h3>
          <a
            href="tel:+18882792634"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              color: '#818cf8',
              fontWeight: 600,
              padding: '0.5rem 1rem',
              background: 'rgba(129, 140, 248, 0.1)',
              borderRadius: '8px',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(129, 140, 248, 0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(129, 140, 248, 0.1)'}
          >
            <Phone size={18} />
            (888) 279-2634
          </a>
        </div>

        {/* Legal Links */}
        <div>
          <h4 style={{ color: '#fff', margin: '0 0 1rem 0' }}>Legal</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link to="/merchant-policies" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
              Merchant Policies
            </Link>
            <Link to="/legal-notice" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
              Legal Notice
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 style={{ color: '#fff', margin: '0 0 1rem 0' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://instagram.com/auguste_ventures" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1' }}>
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com/in/auguste-ventures-416436377" target="_blank" rel="noreferrer" style={{ color: '#cbd5e1' }}>
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '0.875rem',
        color: '#64748b',
      }}>
        &copy; {new Date().getFullYear()} Auguste Ventures. All rights reserved.
      </div>
    </footer>
  );
}
