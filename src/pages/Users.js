import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import "./BarChart/Users.css"; // 👈 CSS import

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // 👈 apna API endpoint
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((u, i) => ({
          id: u.id,
          name: u.name,
          dob: "10-9-2022",
          gender: i % 2 === 0 ? "M" : "F",
          mobile: u.phone,
          email: u.email,
          address: u.address.street + ", " + u.address.city,
        }));
        setUsers(formatted);
        setLoading(false);
      });
  }, []);

  return (
    <AdminLayout>
      <h2 className="page-title">Customer Management</h2>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search products" />
      </div>

      {/* Loading */}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Buyer ID</th>
              <th>Buyer Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Mob. No.</th>
              <th>Email</th>
              <th>Address</th>
              <th>Search History</th>
              <th>Return History</th>
              <th>Order History</th>
              <th>Delete Account</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.dob}</td>
                <td>{u.gender}</td>
                <td>{u.mobile}</td>
                <td>{u.email}</td>
                <td>{u.address}</td>
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
