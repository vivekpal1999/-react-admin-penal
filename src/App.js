import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Login from './pages/Login';
import Seller from './pages/Seller';
import AddCategory from './pages/AddCategory.js';
import SendNotification from './pages/SendNotification';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
         <Route path="/Seller" element={<Seller />} />
         <Route path="/AddCategory" element={<AddCategory />} />
          <Route path="/SendNotification" element={<SendNotification />} />
      </Routes>
    </Router>
  );
}

export default App;
