import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./InventoryItemDetails.scss";
import { baseURL } from "../../../utils/api";

function InventoriesItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      const url = `${baseURL}/inventories/${id}`;
      try {
        const response = await axios.get(url);
        setInventory(response.data);
      } catch (error) {
        console.error("Error fetching inventory details:", error);
      }
    };

    fetchInventory();
  }, [id]);

  if (!inventory) {
    return <div>Loading... or Item not found</div>;
  }

  const statusClass =
    inventory.status.toLowerCase() === "in stock"
      ? "items__status-tag--in-stock"
      : "items__status-tag--out-of-stock";

  return (
    <article className="item">
      <div className="item__header">
        <div className="item__selected">
          <Link to="/inventories" className="item__back-link">
            <svg
              className="item__arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L10.41 7.41L5.83 12L10.41 16.59L9 18L3 12L9 6Z"
                fill="#2E66E6"
              />
            </svg>
          </Link>
          <p className="item__name">{inventory.item_name}</p>
        </div>
        <button
          className="item__edit-button"
          onClick={() => navigate(`/inventories/${id}/edit`)}
        >
          Edit
        </button>
      </div>

      <div className="item__details">
        <div className="item__info-group">
          <h4 className="item__label">Item Description</h4>
          <p className="item__info">{inventory.description}</p>
          <h4 className="item__label">Category</h4>
          <p className="item__info">{inventory.category}</p>
        </div>

        <div className="item__info-group">
          <h4 className="item__label">Status</h4>
          <p className={`item__status-tag ${statusClass}`}>
            {inventory.status}
          </p>
          <h4 className="item__label">QTY</h4>
          <p className="item__info">{inventory.quantity}</p>
          <h4 className="item__label">Warehouse</h4>
          <p className="item__info">{inventory.warehouse_name}</p>
        </div>
      </div>
    </article>
  );
}

export default InventoriesItemDetails;
