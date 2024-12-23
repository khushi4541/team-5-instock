import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./EditInventoryForm.scss";
import { baseURL } from "../../utils/api";
import axios from "axios";

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
  const { id } = useParams();
  const categories = [
    "Electronics",
    "Gear",
    "Apparel",
    "Accessories",
    "Health",
  ];

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${baseURL}/inventories/${id}`);
        const inventoryData = response.data;
        setFormData({
          warehouse_id: inventoryData.warehouse_id,
          item_name: inventoryData.item_name,
          description: inventoryData.description,
          category: inventoryData.category,
          status: inventoryData.status,
          quantity: inventoryData.quantity,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchInventory();
    fetchWarehouses();
  }, [id]);

  const validateForm = () => {
    const newErrors = {};

    const formFields = [
      "warehouse_id",
      "item_name",
      "description",
      "category",
      "status",
      "quantity",
    ];

    formFields.forEach((field) => {
      const value = formData[field];

      // Simplify the validation by removing the check for unchanged fields
      if (!value || (typeof value === "string" && !value.trim())) {
        newErrors[field] = "This field is required.";
      }
    });

    if (formData.status === "In Stock") {
      if (
        !formData.quantity ||
        isNaN(formData.quantity) ||
        formData.quantity <= 0
      ) {
        newErrors.quantity = "Quantity must be a valid number.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      status: value,
      quantity: value === "Out of Stock" ? "" : prevData.quantity,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      status: undefined,
      quantity: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.put(`${baseURL}/inventories/${id}`, formData);
      console.log('Response from API:', response);
      navigate(-1);
    } catch (error) {
      console.error("Error updating inventory:", error);
    }
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
      <form className="edit-inventory__form" onSubmit={handleSubmit}>
        <div className="edit-inventory__form-content">
          <article className="edit-inventory__section">
            <h2 className="edit-inventory__title">Warehouse Details</h2>
            <div className="edit-inventory__form-group">
              <h3 htmlFor="item-name" className="edit-inventory__label">
                Item Name
              </h3>
              <input
                type="text"
                className={`edit-inventory__input ${
                  errors[name] ? "edit-inventory__input--error" : ""
                }`}
                id="item-name"
                name="item_name"
                onChange={handleInputChange}
                value={formData.item_name}
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
                name="description"
                onChange={handleInputChange}
                value={formData.description}
              />
            </div>
            <div className="edit-inventory__form-group">
              <h3 className="edit-inventory__label">Category</h3>
              <select
                className="edit-inventory__dropdown"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.warehouse_id && <p>{errors.warehouse_id}</p>}
            </div>
          </article>

          <article className="edit-inventory__section edit-inventory__section--border">
            <h2 className="edit-inventory__title">Item Availability</h2>
            <div className="edit-inventory__form-group">
              <h3 htmlFor="item-category" className="edit-inventory__label">
                Item Name
              </h3>
              <div className="edit-inventory__radio">
                <div className="edit-inventory__radio-group">
                  <input
                    className="edit-inventory__radio-button"
                    type="radio"
                    name="status"
                    value="In Stock"
                    checked={formData.status === "In Stock"}
                    onChange={handleStatusChange}
                  />
                  <label className="edit-inventory__radio-label">
                    In Stock
                  </label>
                </div>
                <div className="edit-inventory__radio-group">
                  <input
                    className="edit-inventory__radio-button"
                    type="radio"
                    name="status"
                    value="Out of Stock"
                    checked={formData.status === "Out of Stock"}
                    onChange={handleStatusChange}
                  />
                  <label className="edit-inventory__radio-label">
                    Out of Stock
                  </label>
                </div>
              </div>
            </div>
            {formData.status === "In Stock" && (
              <div className="edit-inventory__form-group">
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
        <div className="edit-inventory__actions">
          <button
            type="button"
            className="edit-inventory__cancel"
            onClick={handleBack}
          >
            Cancel
          </button>
          <button type="submit" className="edit-inventory__save">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditInventoryForm;
