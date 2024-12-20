import "./InventoryListItem.scss";
import { Link } from "react-router-dom";

function InventoryListitems({ inventories }) {
  const statusClass =
    inventories.status.toLowerCase() === "in stock"
      ? "items__status-tag--in-stock"
      : "items__status-tag--out-of-stock";
  return (
    <article className="items">
      <div className="items__details">
        <div className="items__location">
          <h4 className="items__label">Inventory</h4>
          <Link
            to={`/inventories/${inventories.id}`}
            className="items__inventory"
          >
            <p className="items__name">{inventories.item_name}</p>
            <svg
              className="item__arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
                fill="#2E66E6"
              />
            </svg>
          </Link>
          <h4 className="items__label">Category</h4>
          <p className="items__info">{inventories.category}</p>
        </div>
        <div className="items__status">
          <p className={`items__status-tag ${statusClass}`}>
            {inventories.status}
          </p>
          <h4 className="items__label">QTY</h4>
          <p className="items__info">{inventories.quantity}</p>
          <h4 className="items__label">Warehouse</h4>
          <p className="items__info">{inventories.warehouse_name}</p>
        </div>
      </div>
      <div className="items__icons">
        <svg
          className="items__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
            fill="#C94515"
          />
        </svg>
        <svg
          className="items__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
            fill="#2E66E6"
          />
        </svg>
      </div>
    </article>
  );
}

export default InventoryListitems;
