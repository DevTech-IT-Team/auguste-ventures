export default function Contact() {
  return (
    <div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Get in touch with the Auguste Ventures team.
      </p>
      <div style={{
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxWidth: '500px'
      }}>
        <p style={{ margin: '0 0 1rem 0' }}>
          <strong>Phone:</strong> <a href="tel:+18882792634" style={{ color: '#818cf8', textDecoration: 'none' }}>(888) 279-2634</a>
        </p>
      </div>
    </div>
  );
}
