export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <div style={{
        padding: '3rem',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'inline-block',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          margin: '0 0 1rem 0',
          background: 'linear-gradient(to right, #818cf8, #c084fc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Auguste Ventures
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', margin: '0' }}>
          Welcome to our Home page.
        </p>
      </div>
    </div>
  );
}
