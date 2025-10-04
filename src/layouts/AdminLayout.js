import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '220px', width: '100%' }}>
        <Navbar />
        <div style={{ padding: '80px 20px 20px 20px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
