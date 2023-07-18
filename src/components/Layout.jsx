import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

const Layout = () => {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <main style={{ textAlign: 'center' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
