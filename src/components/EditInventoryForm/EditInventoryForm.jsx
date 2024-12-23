import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./EditInventoryForm.scss";

function EditInventoryForm({ fetchWarehouses, warehousesData }) {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  const navigate = useNavigate();
  const { inventoryId } = useParams();

  

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="edit-inventory">
      <header className="edit-inventory__header">
        <svg
          className="edit-inventory__arrow"
          onClick={handleBack}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
        </svg>
        <h1 className="edit-inventory__heading">Edit Inventory Item</h1>
      </header>
      <div className="edit-inventory__form-content">
        <article className="edit-inventory__section">
          <h2 className="edit-inventory__title">Warehouse Details</h2>
          <div className="edit-inventory__form-group">
            <h3 htmlFor="item-name" className="edit-inventory__label">
              Item Name
            </h3>
            <input
              type="text"
              className="edit-inventory__input"
              id="item-name"
            />
          </div>
          <div className="edit-inventory__form-group">
            <h3 htmlFor="item-description" className="edit-inventory__label">
              Description
            </h3>
            <textarea
              type="text"
              className="edit-inventory__textarea"
              id="item-description"
            />
          </div>
          <div className="edit-inventory__form-group">
            <h3 htmlFor="item-category" className="edit-inventory__label">
              Item Name
            </h3>
            <input
              type="text"
              className="edit-inventory__input"
              id="item-name"
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default EditInventoryForm;
