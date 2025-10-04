import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./BarChart/AddCategory.css"; 

export default function AddCategory() {
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/dashboard"); // apna dashboard route yahan lagao
  };

  return (
    <div className="add-category-container">
      <h2 className="page-title">Add category</h2>

      <div className="header-bar">
        <span className="title">Add Category</span>
        <button className="done-btn" onClick={handleDone}>Done</button>
      </div>

      {/* Add Category Section */}
      <div className="section">
        <h3>Add Category</h3>
        <div className="options">
          <button className="option">Colorless</button>
          <button className="option">Transparent</button>
          <button className="option">Multi Color</button>
        </div>
        <button className="add-btn">Add</button>
      </div>

      {/* Add Color Section */}
      <div className="section">
        <h3>Add Color</h3>
        <div className="options">
          <button className="option">White</button>
          <button className="option">Blue</button>
          <button className="option">Green</button>
          <button className="option">Orange</button>
        </div>
        <button className="add-btn">Add</button>
      </div>

      {/* Add Size Section */}
      <div className="section">
        <h3>Add Size</h3>
        <div className="options">
          <button className="option">A2</button>
          <button className="option">B2</button>
          <button className="option">B1</button>
        </div>
        <button className="add-btn">Add</button>
      </div>

      {/* Add Specification Section */}
      <div className="section">
        <h3>Add Specification</h3>
        <div className="options">
          <button className="option">Waist color</button>
          <button className="option">Button design</button>
          <button className="option">Extra length</button>
        </div>
        <button className="add-btn">Add</button>
      </div>

      {/* Add Volume Section */}
      <div className="section">
        <h3>Add Volume</h3>
        <div className="options">
          <button className="option">500 ml</button>
          <button className="option">250 ml</button>
          <button className="option">750 ml</button>
          <button className="option">1000 ml</button>
        </div>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}
