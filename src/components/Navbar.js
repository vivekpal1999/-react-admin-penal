import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm); // Parent component me callback
    }
    console.log("Searching for:", searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{
      height: '60px',
      background: '#f8fafc',
      borderBottom: '1px solid #F6F8F9FF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      position: 'fixed',
      width: 'calc(100% - 220px)',
      left: '220px',
      top: 0,
      boxSizing: 'border-box',
      zIndex: 1000
    }}>
      {/* Left: Search Input + Button */}
      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            padding: '6px 10px',
            borderRadius: '4px 0 0 4px',
            border: '1px solid #F6F8F9FF',
            width: '250px',
            outline: 'none'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '6px 12px',
            border: '1px solid #ccc',
            borderLeft: '0',
            borderRadius: '0 4px 4px 0',
            background: '#3b82f6',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>

      {/* Right: Admin Profile + Notification */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Admin Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <span>Admin Name</span>
          <img 
            src="https://via.placeholder.com/35" 
            alt="Profile" 
            style={{ borderRadius: '50%', width: '35px', height: '35px' }}
          />
        </div>

        {/* Notification Icon */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1827/1827392.png" 
            alt="Notifications" 
            style={{ width: '25px', height: '25px' }}
          />
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px'
          }}>3</span>
        </div>
      </div>
    </div>
  );
}
