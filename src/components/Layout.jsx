import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      color: '#fff',
      fontFamily: '"Inter", sans-serif',
      paddingTop: '80px', // For fixed navbar
    }}>
      <Navbar />
      
      <main style={{ flex: 1, padding: '2rem 5%' }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
