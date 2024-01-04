 import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

import '../Assets/Dashboard.css';
import { Link } from "react-router-dom";

const Products = () => {

  
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="app-container">
        {/* App Bar */}
        <div className="app-bar">
          <button >Toggle Sidebar</button>
          <h1>Frank's Fram</h1>
        </div>
  
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <Link to='/'><li>Logout</li></Link>
          </ul>
        </div>
  
        {/* Content Section */}
        <div className="content">
       
       
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide">
                <p class="title">Citrus</p>
                <p></p>
            </div>
            <div class="backSide">
                <p class="title">ABOUT</p>
                <p>"Citrus fruits are like nature's candy, a burst of sunshine in every bite."</p>
            </div>
          </div>
       </div>
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide">
                <p class="title">Greens</p>
                <p></p>
            </div>
            <div class="backSide">
                <p class="title">ABOUT</p>
                <p>"Eat your greens to stay lean."</p>
            </div>
          </div>
       </div>
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide">
                <p class="title">Farm Freshs</p>
                <p></p>
            </div>
            <div class="backSide">
                <p class="title">ABOUT</p>
                <p>"Fresh fruits and veggies straight from the farm – nature's own fast food."</p>
            </div>
          </div>
       </div>
        <div class="myCard">
          <div class="innerCard">
            <div class="frontSide">
                <p class="title">High Proteins</p>
                <p></p>
            </div>
            <div class="backSide">
                <p class="title">ABOUT</p>
                <p>"In every season, nature offers us a vibrant palette of flavors."</p>
            </div>
          </div>
       </div>
        </div>
      </div>
  );
};

export default Products;