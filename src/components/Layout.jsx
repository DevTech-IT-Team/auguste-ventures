import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css';

export default function Layout() {
  return (
    <div className="site-shell" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f3f4f6',
      color: '#2d3748',
      fontFamily: 'Montserrat, system-ui, "Segoe UI", Roboto, sans-serif',
    }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
