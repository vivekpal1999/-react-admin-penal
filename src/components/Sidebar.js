import { Link } from "react-router-dom";
// ✅ Import icons from react-icons
import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
  FaShoppingCart,
  FaTicketAlt,
  FaCertificate,
  FaAd,
  FaFolderPlus,
  FaCog,
  FaBell,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "##ADD8EDFF",
        color: "black",
        height: "100vh",
        paddingTop: "20px",
        position: "fixed",
        borderRight: "1px solid #1F2021FF",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Admin Panel</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaTachometerAlt />{" "}
          <Link
            to="/dashboard"
            style={{ color: "black", textDecoration: "none", }}
          >
            Dashboard
          </Link>
        </li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaUsers />{" "}
          <Link to="/users" style={{ color: "black", textDecoration: "none" }}>
            Customer Management
          </Link>
        </li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaUserTie />
  <Link to="/Seller" style={{ color: "black", textDecoration: "none" }}>
    Seller Management
  </Link>
        </li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaShoppingCart />{" "}
          <Link to="/orders" style={{ color: "black", textDecoration: "none" }}>
            Order Management
          </Link>
        </li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaTicketAlt />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" }}>
            Coupon Management
          </Link>
        </li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaCertificate />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" }}>
            Kalkideals Certified Management
          </Link>
        </li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaAd />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" }}>
            Advertisement
          </Link>
        </li>
        <li
  style={{
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderBottom: "1px solid #ccc",
  }}
>
  <FaFolderPlus />
  <Link
    to="/AddCategory"
    style={{ color: "black", textDecoration: "none" }}
  >
    Add Category
  </Link>
</li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaCog />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" }}>
            Settings
          </Link>
        </li>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <FaBell />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" }}>
            Send Notification
          </Link>
        </li>
      </ul>
    </div>
  );
}
