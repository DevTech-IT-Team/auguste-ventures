import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0a0e', // darker, richer background
      color: '#fff',
      fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
      paddingTop: '80px', // For fixed navbar
    }}>
      <Navbar />
      
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
