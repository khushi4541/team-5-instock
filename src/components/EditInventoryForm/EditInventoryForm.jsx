import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const categories = [
    "Electronics",
    "Gear",
    "Apparel",
    "Accessories",
    "Health",
  ];

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      status: value,
      quantity: value === "Out of Stock" ? "" : prevData.quantity, // Clear quantity if status is "Out of Stock"
    }));
  };

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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </div>
          <div className="edit-inventory__form-group">
            <h3 className="edit-inventory__label">Category</h3>
            <select
              className="edit-inventory__dropdown"
              name="warehouse_id"
              value={formData.warehouse_id}
              onChange={handleInputChange}
            >
              <option value="">Select a Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.warehouse_id && <p>{errors.warehouse_id}</p>}
          </div>
        </article>

        <article className="edit-inventory__section">
          <h2 className="edit-inventory__title">Warehouse Details</h2>
          <div className="edit-inventory__form-group">
            <h3 htmlFor="item-category" className="edit-inventory__label">
              Item Name
            </h3>
            <label className="edit-inventory__radio-label">
              <input
                type="radio"
                name="status"
                value="In Stock"
                checked={formData.status === "In Stock"}
                onChange={handleStatusChange}
              />
              In Stock
            </label>
            <label className="edit-inventory__radio-label">
              <input
                type="radio"
                name="status"
                value="Out of Stock"
                checked={formData.status === "Out of Stock"}
                onChange={handleStatusChange}
              />
              Out of Stock
            </label>
          </div>
          {formData.status === "In Stock" && (
            <div>
              <h3 className="edit-inventory__label">Quantity</h3>
              <input
                className="edit-inventory__input"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
              {errors.quantity && <p>{errors.quantity}</p>}
            </div>
          )}
          <div className="edit-inventory__form-group">
            <h3 className="edit-inventory__label"> Warehouse</h3>
            <select
              className="edit-inventory__dropdown"
              name="warehouse_id"
              value={formData.warehouse_id}
              onChange={handleInputChange}
            >
              <option value="">Select a warehouse</option>
              {warehousesData.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
            {errors.warehouse_id && <p>{errors.warehouse_id}</p>}
          </div>
        </article>
      </div>
    </section>
  );
}

export default EditInventoryForm;
