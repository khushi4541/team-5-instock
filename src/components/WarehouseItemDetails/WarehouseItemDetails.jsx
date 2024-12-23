import "./WarehouseItemDetails.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../utils/api";

export default function WarehouseCardDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    const fetchWarehouse = async () => {
      const url = `${baseURL}/warehouses/${id}`;
      try {
        const response = await axios.get(url);
        setWarehouse(response.data);
      } catch (error) {
        console.error("Error fetching warehouse details:", error);
      }
    };
    fetchWarehouse();
  }, [id]);

  if (!warehouse) {
    return <p>Loading warehouse details...</p>;
  }

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
          <h1 className="card__name">{warehouse.warehouse_name}</h1>
        </div>
        <button
  className="card__headeredit"
  onClick={() => navigate(`/warehouses/${id}/edit`)}
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
  <span>Edit</span>
</button>

      </div>
      <div className="card__div"></div>
      <div className="card__contact">
        <div className="card__adress">
          <h4 className="card__lab">WAREHOUSE ADDRESS:</h4>
          <p className="card__info">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
        </div>
        <div className="card__divider"></div>
        <div className="card__other">
          <div className="card__item">
            <h4 className="card__lab">CONTACT NAME:</h4>
            <p className="card__info">{warehouse.contact_name}</p>
            <p className= "card__info">{warehouse.contact_position}</p>
          </div>
          <div className="card__contact-info">
          <h4 className="card__lab">CONTACT INFORMATION:</h4>
            <p className="card__info item__info--phone">
              {warehouse.contact_phone}
            </p>
            <p className="card__info">{warehouse.contact_email}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
