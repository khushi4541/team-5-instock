import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./InventoryItemDetails.scss";
import { baseURL } from "../../../utils/api";

function InventoriescardDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inventories, setInventories] = useState(null);

  useEffect(() => {
    const fetchInventories = async () => {
      const url = `${baseURL}/inventories/${id}`;
      try {
        const response = await axios.get(url);
        setInventories(response.data);
      } catch (error) {
        console.error("Error fetching inventory details:", error);
      }
    };

    fetchInventories();
  }, [id]);

  if (!inventories) {
    return <div>Loading...</div>;
  }

  const statusClass =
    inventories.status.toLowerCase() === "in stock"
      ? "items__status-tag--in-stock"
      : "items__status-tag--out-of-stock";

  return (
    <article className="card">
      <div className="card__header">
        <div className="card__selected">
          <div
            className="card__back-link"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          >
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
          </div>
          <h1 className="card__name">{inventories.item_name}</h1>
        </div>
        <button
          className="card__headeredit"
          onClick={() => navigate(`/inventories/${id}/edit`)}
        >
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
          Edit
        </button>
      </div>
      <div className="card__div"></div>
      <div className="card__columns">
        <div className="card__infogroup">
          <h4 className="card__label">ITEM DESCRIPTION:</h4>
          <p className="card__info-item">{inventories.description}</p>
          <h4 className="card__label">CATEGORY:</h4>
          <p className="card__info-item">{inventories.category}</p>
        </div>
        <div className="card__divider"></div>
        <div className="card__ingroup">
          <div className="card__quantity">
            <h4 className="card__label">STATUS:</h4>
            <p className={`card__info-item card__status-tag ${statusClass}`}>
              {inventories.status}
            </p>
            <h4 className="card__label">WAREHOUSE:</h4>
            <p className="card__info-item">{inventories.warehouse_name}</p>
          </div>
          <div className="card__amount">
            <h4 className="card__label">QTY:</h4>
            <p className="card__info-item">{inventories.quantity}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default InventoriescardDetails;
