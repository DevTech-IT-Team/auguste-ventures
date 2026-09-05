import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(10, 10, 14, 0.8)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      padding: '5rem 5% 2rem',
      color: '#cbd5e1',
      marginTop: 'auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '200px',
        background: 'rgba(192, 132, 252, 0.15)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '4rem',
        marginBottom: '4rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Brand & Phone CTA */}
        <div>
          <h3 style={{
            fontSize: '1.75rem',
            margin: '0 0 1rem 0',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #e879f9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Auguste Ventures
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '300px' }}>
            Transforming businesses through data-driven insights and strategic excellence in Las Vegas.
          </p>
          <a
            href="tel:+15551234567"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: '#fff',
              fontWeight: 600,
              padding: '0.75rem 1.25rem',
              background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.15), rgba(192, 132, 252, 0.15))',
              border: '1px solid rgba(192, 132, 252, 0.3)',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px 0 rgba(192, 132, 252, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(192, 132, 252, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(192, 132, 252, 0.1)';
            }}
          >
            <Phone size={18} color="#c084fc" />
            Call Us Today
          </a>
        </div>

        {/* Legal Links */}
        <div>
          <h4 style={{ color: '#fff', margin: '0 0 1.5rem 0', fontSize: '1.125rem' }}>Legal Information</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/merchant-policies" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#c084fc'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
              Merchant Policies
            </Link>
            <Link to="/legal-notice" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseOver={(e) => e.target.style.color = '#c084fc'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
              Legal Notice
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 style={{ color: '#fff', margin: '0 0 1.5rem 0', fontSize: '1.125rem' }}>Connect With Us</h4>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="mailto:contact@augusteventures.com" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)', color: '#fff', textDecoration: 'none', transition: 'all 0.3s ease'
            }} onMouseOver={(e) => { e.currentTarget.style.background = '#c084fc'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <Mail size={20} />
            </a>
            <a href="https://instagram.com/auguste_ventures" target="_blank" rel="noreferrer" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)', color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.3s ease'
            }} onMouseOver={(e) => { e.currentTarget.style.background = '#c084fc'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              IG
            </a>
            <a href="https://linkedin.com/in/auguste-ventures-416436377" target="_blank" rel="noreferrer" style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)', color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', transition: 'all 0.3s ease'
            }} onMouseOver={(e) => { e.currentTarget.style.background = '#c084fc'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              IN
            </a>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.4)',
        position: 'relative',
        zIndex: 1
      }}>
        &copy; {new Date().getFullYear()} Auguste Ventures. All rights reserved.
      </div>
    </footer>
  );
}
