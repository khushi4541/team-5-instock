import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/logo/InStock-Logo.svg";

import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isWarehousesPath = location.pathname.startsWith("/warehouses");
  return (
    <header className="header">
      <Link to="/warehouses" className="header__logo">
        <img src={Logo} alt="InStock Logo" className="header__logo-image1" />
        <img src={Logo} alt="InStock Logo" className="header__logo-image2" />
      </Link>
      <div className="header__nav">
        <Link to="/warehouses" className={`header__link ${isWarehousesPath ? "header__link--selected" : ""}`} >
          <p className="header__option">Warehouses</p>
        </Link>

        <Link to="/inventory" className={`header__link ${isWarehousesPath ? "" : "header__link--selected"}`}>
          <p className="header__option">Inventory</p>
        </Link>
      </div>
    </header>
  );
}
