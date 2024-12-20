import "./InventoryItemDetails.scss";
import { Link } from "react-router-dom";

function InventoryItemDetails({ getInventoryById }) {
  return (
    <article className="item">
      <div className="item__details">
        <div className="item__location">
          <Link
            to={`/inventories/${getInventoryById.id}`}
            className="item__inventory"
          >
            <svg
              className="item__arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L13.59 7.41L18.17 12L13.59 16.59L15 18L21 12L15 6Z"
                fill="#2E66E6"
              />
            </svg>
            <p className="item__name">{getInventoryById.item_name}</p>
            
          </Link>

         
