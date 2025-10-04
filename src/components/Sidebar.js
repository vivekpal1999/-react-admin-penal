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
        background: "##0EA0E9FF",
        color: "black",
        height: "100vh",
        paddingTop: "20px",
        position: "fixed",
        borderRight: "1px solid #F6F8F9FF",
        background: "#B6CCD7",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px",borderBottom:"4px solid #F6F8F9FF" }}>Admin Panel</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
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
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
            
          }}
        >
          <FaUsers />{" "}
          <Link to="/users" style={{ color: "black", textDecoration: "none" ,fontSize:"14px"}}>
            Customer Management
          </Link>
        </li>
        <li
          style={{
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
          }}
        >
          <FaUserTie />
  <Link to="/Seller" style={{ color: "black", textDecoration: "none" ,fontSize:"14px" }}>
    Seller Management
  </Link>
        </li>
        <li
          style={{
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
          }}
        >
          <FaShoppingCart />{" "}
          <Link to="/orders" style={{ color: "black", textDecoration: "none" ,fontSize:"14px" }}>
            Order Management
          </Link>
        </li>
        <li
          style={{
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
          }}
        >
          <FaTicketAlt />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" ,fontSize:"14px" }}>
            Coupon Management
          </Link>
        </li>
        <li
          style={{
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",

          }}
        >
          <FaCertificate />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" ,fontSize:"14px"}}>
            Kalkideals Certified Management
          </Link>
        </li>
        <li
          style={{
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
          }}
        >
          <FaAd />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" ,fontSize:"14px" }}>
            Advertisement
          </Link>
        </li>
        <li
  style={{
    padding: "18px 20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderBottom:"3px solid #F6F8F9FF",
  }}
>
  <FaFolderPlus />
  <Link
    to="/AddCategory"
    style={{ color: "black", textDecoration: "none" ,fontSize:"14px" }}
  >
    Add Category
  </Link>
</li>
        <li
          style={{
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
          }}
        >
          <FaCog />{" "}
          <Link to="" style={{ color: "black", textDecoration: "none" ,fontSize:"14px" }}>
            Settings
          </Link>
        </li>
        <li
          style={{
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderBottom: "3px solid #F6F8F9FF",
            
          }}
        >
          <FaBell />{" "}
          <Link to="/SendNotification" style={{ color: "black", textDecoration: "none" ,fontSize:"14px" }}>
            Send Notification
          </Link>
        </li>
      </ul>
    </div>
  );
}
