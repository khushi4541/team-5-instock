import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo1 from "../../assets/logo/InStock-Logo_1x.png";
import Logo2 from "../../assets/logo/InStock-Logo_2x.png";
export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo1} alt="InStock Logo" className="header__logo-image1" />
        <img src={Logo2} alt="InStock Logo" className="header__logo-image2" />
      </div>
      <div className="header__nav">
       
            <Link to="/warehouses" className="header__nav-link1">
              Warehouses
            </Link>
         
            <Link to="/inventory" className="header__nav-link2">
              Inventory
            </Link>
          

      </div>
    </header>
  );
}
