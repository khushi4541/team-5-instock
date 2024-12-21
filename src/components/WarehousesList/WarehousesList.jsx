import "./WarehousesList.scss";
import WarehousesListItem from "../WarehousesListItem/WarehousesListItem";

function WarehousesList({ handleDeleteClick, warehousesData }) {
  return (
    <section className="warehouses">
      <div className="warehouses__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <div className="warehouses__functionality">
          <div className="warehouses__search">
            <input
              type="text"
              className="warehouses__input"
              name="search"
              placeholder="Search..."
            />
            <svg
              className="warehouses__icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14V14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                fill="#5C667E"
              />
            </svg>
          </div>
          <button className="warehouses__button">+ Add New Warehouse</button>
        </div>
      </div>
      <div className="warehouses__headings">
        <div className="warehouses__heading">
          <h4 className="warehouses__label">WAREHOUSE</h4>
          <svg
            className="warehouses__sort"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </div>
        <div className="warehouses__heading">
          <h4 className="warehouses__label">ADDRESS</h4>
          <svg
            className="warehouses__sort"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </div>
        <div className="warehouses__heading">
          <h4 className="warehouses__label">CONTACT NAME</h4>
          <svg
            className="warehouses__sort"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </div>
        <div className="warehouses__heading">
          <h4 className="warehouses__label">CONTACT INFORMATION</h4>
          <svg
            className="warehouses__sort"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
              fill="#5C667E"
            />
          </svg>
        </div>
        <h4 className="warehouses__label warehouses__label--actions">
          ACTIONS
        </h4>
      </div>
      <div className="warehouses__list">
        {warehousesData.map((warehouse) => (
          <WarehousesListItem
            key={warehouse.id}
            warehouse={warehouse}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    </section>
  );
}

export default WarehousesList;
