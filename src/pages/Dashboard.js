import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
} from "recharts";
import Costumers from "../components/Costumers";
import AdminLayout from "../layouts/AdminLayout";

// Dummy data
const barData = [
  { name: "Jan", orders: 400 },
  { name: "Feb", orders: 300 },
  { name: "Mar", orders: 500 },
  { name: "Apr", orders: 200 },
  { name: "May", orders: 700 },
];

const pieData1 = [
  { name: "Active Buyers", value: 62 },
  { name: "Inactive Buyers", value: 38 },
];

const pieData2 = [
  { name: "Active Sellers", value: 52 },
  { name: "Inactive Sellers", value: 48 },
];

const Dashboard = () => {
  return (
    <AdminLayout>
      {/* Top Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: "space-around",
        }}
      >
        <Costumers title={"Total Buyers"} qty={62} />
        <Costumers title={"Total Sellers"} qty={52} />
        <Costumers title={"Pending Orders"} qty={1192} />
        <Costumers title={"Total Orders"} qty={5692} />
      </div>

      {/* Charts Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* PieCharts */}
        <PieChart width={400} height={300}>
          <Pie
            data={pieData1}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#004AAD"
            label
          />
          <Tooltip />
        </PieChart>

        <PieChart width={400} height={300}>
          <Pie
            data={pieData2}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </div>

      {/* Bar Charts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <BarChart width={400} height={300} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="orders" fill="#8884d8" barSize={30} />
        </BarChart>

        <BarChart width={400} height={300} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="orders" fill="#82ca9d" barSize={30} />
        </BarChart>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>City</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Orders</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Pincode</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Gujarat</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>562</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>326518</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>445559</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>Maharashtra</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>600</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>326519</td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>245203</td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Dashboard;
