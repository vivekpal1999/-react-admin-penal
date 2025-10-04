import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import "./BarChart/Sellers.css"; // 👈 CSS import

export default function Sellers() {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  // API se data fetch
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // 👈 apna seller API endpoint
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((u, i) => ({
          id: u.id,
          name: u.name,
          type: i % 2 === 0 ? "Wholesaler" : "Retailer",
          gender: i % 2 === 0 ? "M" : "F",
          mobile: u.phone,
          email: u.email,
          address: u.address.street + ", " + u.address.city,
        }));
        setSellers(formatted);
        setLoading(false);
      });
  }, []);

  return (
    <AdminLayout>
      <h2 className="page-title">Seller Management</h2>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search sellers" />
      </div>

      {/* Loading */}
      {loading ? (
        <p>Loading sellers...</p>
      ) : (
        <table className="sellers-table">
          <thead>
            <tr>
              <th>Seller ID</th>
              <th>Seller Name</th>
              <th>Type of Business</th>
              <th>Gender</th>
              <th>Mob. No.</th>
              <th>Email</th>
              <th>Address</th>
              <th>Listed Products</th>
              <th>Order Management</th>
              <th>Pending</th>
              <th>Delete Account</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.type}</td>
                <td>{s.gender}</td>
                <td>{s.mobile}</td>
                <td>{s.email}</td>
                <td>{s.address}</td>
                <td><button className="btn save">Save</button></td>
                <td><button className="btn save">Save</button></td>
                <td><button className="btn save">Save</button></td>
                <td><button className="btn delete">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}
