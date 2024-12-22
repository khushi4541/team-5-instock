import "./WarehouseItemDetails.scss";
import { useLocation, Link } from "react-router-dom";

// import WarehouseInventory from "../WarehouseInventory/WarehouseInventory";

export default function WarehouseDetails() {
  const location = useLocation();
  const warehouse = location.state?.warehouse;

  if (!warehouse) {
    return (
      <div className="warehouse-error-message">
        No warehouse data available.
      </div>
    );
  }

  return (
    <>
      <div className="warehouse-details-container">
        <div className="warehouse-details">
          <div className="warehouse-header">
            <Link to="/" className="warehouse-header-back">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#2E66E6"
                />
              </svg>
            </Link>
            <h1 className="warehouse-header-title">
              {warehouse.warehouse_name}
            </h1>
            <a className="warehouse-header-edit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                  fill="#FFFFFF"
                />
              </svg>
              <span className="warehouse-edit-text">Edit</span>
            </a>
          </div>
          <ul className="warehouse-info-list">
            <div className="warehouse-text-wrapper">
              <div className="warehouse-info-wrapper">
                <li className="warehouse-info-item warehouse-address">
                  <h4 className="warehouse-section-title">Warehouse Address</h4>
                  <p className="warehouse-address-details">
                    {warehouse.address}, {warehouse.city}, {warehouse.country}
                  </p>
                </li>
                <li className="warehouse-info-item warehouse-contact">
                  <div className="warehouse-contact-details">
                    <h4 className="warehouse-section-title">Contact Name</h4>
                    <p className="contact-person-name">
                      {warehouse.contact_name}
                    </p>
                    <p className="contact-person-role">
                      {warehouse.contact_position}
                    </p>
                  </div>
                  <div className="warehouse-contact-info">
                    <h4 className="warehouse-section-title">
                      Contact Information
                    </h4>
                    <p className="contact-phone">{warehouse.contact_phone}</p>
                    <p className="contact-email">{warehouse.contact_email}</p>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="inventory-header">
          <ul className="inventory-columns">
            <li className="inventory-column-title">
              <h4 className="inventory-label">Inventory Item</h4>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                  fill="#5C667E"
                />
              </svg>
            </li>
            <li className="inventory-column-title">
              <h4 className="inventory-label">Category</h4>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                  fill="#5C667E"
                />
              </svg>
            </li>
            <li className="inventory-column-title">
              <h4 className="inventory-label">Status</h4>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                  fill="#5C667E"
                />
              </svg>
            </li>
            <li className="inventory-column-title">
              <h4 className="inventory-label">Quantity</h4>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
                  fill="#5C667E"
                />
              </svg>
            </li>
            <li className="inventory-column-title inventory-actions">
              <h4 className="inventory-label">Actions</h4>
            </li>
          </ul>
        </div>
        {/* <WarehouseInventory warehouseId={warehouse.id} warehouse={warehouse} /> */}
      </div>
    </>
  );
}
