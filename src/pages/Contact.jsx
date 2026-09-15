export default function Contact() {
  return (
    <div style={{ padding: '2.5rem 5% 4rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ color: '#4a5568', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Get in touch with the Auguste Ventures team.
      </p>
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        maxWidth: '500px'
      }}>
        <p style={{ margin: '0 0 1rem 0' }}>
          <strong>Phone:</strong> <a href="tel:+18882792634" style={{ color: '#0b88a3', textDecoration: 'none' }}>(888) 279-2634</a>
        </p>
      </div>
    </div>
  );
}
