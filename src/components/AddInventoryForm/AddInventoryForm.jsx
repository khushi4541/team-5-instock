import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../utils/api";
import "./AddInventoryForm.scss";

function AddInventoryForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "In Stock", // Default to "In Stock"
    quantity: "1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const formFields = [
      "item_name",
      "description",
      "category",
      "status",
      "warehouse_id",
      "quantity",
    ];

    // Check required fields
    formFields.forEach((field) => {
      const value = formData[field];
      if (!value || !value.trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    if (formData.status === "In Stock" && !formData.quantity) {
      newErrors.quantity = "Quantity is required when the item is in stock.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form
    if (!validateForm()) return;
    try {
      await axios.post(`${baseURL}/inventories/`, formData);
      setErrors({});
      navigate(-1);
    } catch (error) {
      console.error("Error adding inventory item:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="add-inventory">
      <header className="add-inventory__header">
        <svg
          className="add-inventory__arrow"
          onClick={handleBack}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
        </svg>
        <h1 className="add-inventory__heading">Add New Inventory Item</h1>
      </header>
      <form action="" className="add-inventory__form">
        <div className="add-inventory__form-content">
          <article className="add-inventory__section">
            <h2 className="add-inventory__title">Item Details</h2>

            {[
              { label: "Item Name", name: "item_name", type: "text" },
              {
                label: "Description",
                placeholder: "Please enter a brief item description",
                text: "Please enter a brief item description",
                name: "description",
                type: "textarea",
              },
            ].map(({ label, name, type }) => (
              <div className="add-inventory__form-group" key={name}>
                <h3 className="add-inventory__label">{label}</h3>
                {type === "textarea" ? (
                  <textarea
                    className={`add-inventory__input add-inventory__input--text ${
                      errors[name] ? "add-inventory__input--error" : ""
                    }`}
                    name={name}
                    value={formData[name]}
                    placeholder={label}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input
                    type={type}
                    className={`add-inventory__input ${
                      errors[name] ? "add-inventory__input--error" : ""
                    }`}
                    name={name}
                    value={formData[name]}
                    placeholder={label}
                    onChange={handleInputChange}
                  />
                )}
                {errors[name] && (
                  <div className="add-inventory__error-message">
                    <svg
                      className="add-inventory__error-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                        fill="#C94515"
                      />
                    </svg>
                    {errors[name]}
                  </div>
                )}
              </div>
            ))}

            <div className="add-inventory__form-group">
              <h3 className="add-inventory__label">Category</h3>
              <select
                className={`add-inventory__input ${
                  errors.category ? "add-inventory__input--error" : ""
                }`}
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Gear</option>
                <option value="Clothing">Apparel</option>
                <option value="Groceries">Accessories</option>
                <option value="Clothing">Health</option>
              </select>
              {errors.category && (
                <div className="add-inventory__error-message">
                  <svg
                    className="add-inventory__error-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="#C94515"
                    />
                  </svg>
                  {errors.category}
                </div>
              )}
            </div>
          </article>

          <article className="add-inventory__section add-inventory__section--border">
            <h2 className="add-inventory__title">Item Availability</h2>

            <div className="add-inventory__form-group">
              <h3 className="add-inventory__label">Status</h3>
              {["In Stock", "Out of Stock"].map((status) => (
                <label key={status} className="add-inventory__radio-label">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={formData.status === status}
                    onChange={handleInputChange}
                    className="add-inventory__radio-input"
                  />
                  {status}
                </label>
              ))}
              {errors.status && (
                <div className="add-inventory__error-message">
                  <svg
                    className="add-inventory__error-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="#C94515"
                    />
                  </svg>
                  {errors.status}
                </div>
              )}
            </div>

            <div className="add-inventory__form-group">
              <h3 className="add-inventory__label">Quantity</h3>
              <input
                type="number"
                className={` add-inventory__input add-inventory__input--item ${
                  errors.quantity ? "add-inventory__input--error" : ""
                }`}
                name="quantity"
                value={formData.quantity}
                placeholder="Enter quantity"
                onChange={handleInputChange}
              />
              {errors.quantity && (
                <div className="add-inventory__error-message">
                  <svg
                    className="add-inventory__error-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="#C94515"
                    />
                  </svg>
                  {errors.quantity}
                </div>
              )}
            </div>

            <div className="add-inventory__form-group">
              <h3 className="add-inventory__label">Warehouse</h3>
              <select
                name="warehouse_id"
                value={formData.warehouse_id}
                onChange={handleInputChange}
                className={`add-inventory__input ${
                  errors.warehouse_id ? "add-inventory__input--error" : ""
                }`}
              >
                <option value="">Select Warehouse</option>
                <option value="1">Jersey</option>
                <option value="2">SF</option>
                <option value="3">Santa Monica</option>
                <option value="1">Seattle</option>
                <option value="2">Miami</option>
                <option value="3">Boston</option>
              </select>
              {errors.warehouse_id && (
                <div className="add-inventory__error-message">
                  <svg
                    className="add-inventory__error-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                      fill="#C94515"
                    />
                  </svg>
                  {errors.warehouse_id}
                </div>
              )}
            </div>
          </article>
        </div>

        <div className="add-warehouse__actions">
          <button
            type="button"
            className="add-warehouse__cancel"
            onClick={handleBack}
          >
            Cancel
          </button>
          <button
            type="button"
            className="add-warehouse__add"
            onClick={handleSubmit}
          >
            + Add Item
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddInventoryForm;
