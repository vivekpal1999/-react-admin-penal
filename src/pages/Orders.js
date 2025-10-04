import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import "./BarChart/Orders.css"; // 👈 CSS import

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy API data
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.slice(0, 5).map((o, i) => ({
          id: "E2454" + i,
          date: "29-10-2020",
          customer: ["Binod", "Vineet", "Ajay", "Alankhe", "Yash"][i],
          amount: 600,
          status: ["Out for delivery", "Shipped", "Confirmed", "Processing", "Out for delivery"][i],
          exp: "30-10-2020",
          buyerId: "5054M",
          sellerId: "60234M",
          productId: "85034M",
        }));
        setOrders(formatted);
        setLoading(false);
      });
  }, []);

  return (
    <AdminLayout>
      <h2 className="page-title">Order Management</h2>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date/Order placed</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Estimated dispatch</th>
              <th>Buyer ID</th>
              <th>Seller ID</th>
              <th>Product ID</th>
              <th>Order Details</th>
              <th>Order Tracking</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i}>
                <td>{o.id}</td>
                <td>{o.date}</td>
                <td>{o.customer}</td>
                <td>{o.amount}</td>
                <td>{o.status}</td>
                <td>{o.exp}</td>
                <td>{o.buyerId}</td>
                <td>{o.sellerId}</td>
                <td>{o.productId}</td>
                <td><button className="btn save">Save</button></td>
                <td><button className="btn manage">Manage</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </AdminLayout>
  );
}
