import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./InventoryItemDetails.scss";
import { baseURL } from "../../../utils/api";

function InventoriesItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inventories, setinventories] = useState(null);

  useEffect(() => {
    const fetchinventories = async () => {
      const url = `${baseURL}/inventories/${id}`;
      try {
        const response = await axios.get(url);
        setinventories(response.data);
      } catch (error) {
        console.error("Error fetching inventories details:", error);
      }
    };

    fetchinventories();
  }, [id]);

  if (!inventories) {
    return <div>Loading... or Item not found</div>;
  }

  const statusClass =
    inventories.status.toLowerCase() === "in stock"
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
          <p className="item__name">{inventories.item_name}</p>
        </div>
        <button
          className="item__edit-button"
          onClick={() => navigate(`/inventories/${id}/edit`)}
        >
          Edit
        </button>
      </div>

      <div className="item__details">
        <div className="item__infogroup">
          <h4 className="item__label">
            Item Description:{inventories.description}
          </h4>
          <p className="item__info">{inventories.description}</p>
          <h4 className="item__label">Category</h4>
          <p className="item__info">{inventories.category}</p>
        </div>

        <div className="item__info-group">
          <div className="item__quantity">
            <h4 className="item__label">Status</h4>
            <p className={`item__status-tag ${statusClass}`}>
              {inventories.status}
            </p>
            <h4 className="item__label">Warehouse</h4>
            <p className="item__info">{inventories.warehouse_name}</p>
          </div>
          <h4 className="item__label">QTY</h4>
          <p className="item__info">{inventories.quantity}</p>
        </div>
      </div>
    </article>
  );
}

export default InventoriesItemDetails;
