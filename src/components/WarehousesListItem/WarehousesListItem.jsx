function WarehousesListItem() {
  return (
    <article className="item">
      <div className="item__details">
        <div className="item__location">
          <p className="item__label">WAREHOUSE</p>
          <p className="item__place">dynamic-location</p>
          <p className="item__label">ADDRESS</p>
          <p className="item__info">dynamic-address</p>
        </div>
        <div className="item__contact">
          <p className="item__label">CONTACT NAME</p>
          <p className="item__info">dynamic-name</p>
          <p className="item__label">CONTACT INFORMATION</p>
          <p className="item__info">dynamic-email</p>
        </div>
      </div>
      <div className="item__icons">
        <svg
          className="item__icon"
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
          className="item__icon"
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

export default WarehousesListItem;
