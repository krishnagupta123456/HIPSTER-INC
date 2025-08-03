import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen mx-9">
      <Header />
      <div className={`pt-20 ${theme === 'theme2' ? 'flex' : ''}`}>
        {theme === 'theme2' && <Sidebar />}
        <main className="flex-1 px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;