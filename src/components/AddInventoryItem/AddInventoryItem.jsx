import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddInventoryItemForm.scss";

function AddInventoryItemForm({ warehousesData, fetchInventory }) {
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "in stock", // Default to "In Stock"
    quantity: "",
    warehouse_id: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field] && field !== "quantity") {
        newErrors[field] = `${field.replace("_", " ")} is required`;
      }
    });

    if (formData.status === "in stock" && !formData.quantity) {
      newErrors.quantity = "Quantity is required for 'In Stock' status.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post("http://localhost:3030/inventories", formData);
      fetchInventory(); // Refresh the list
      navigate(-1); // Go back to inventory list
    } catch (error) {
      console.error("Error adding inventory:", error);
    }
  };

  return (
    <section className="add-inventory">
      <header className="add-inventory__header">
        <button
          className="add-inventory__back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <h1 className="add-inventory__heading">Add New Inventory Item</h1>
      </header>

      <form className="add-inventory__form" onSubmit={handleSubmit}>
        <div className="add-inventory__section">
          <h2 className="add-inventory__title">Item Details</h2>
          <label>
            Item Name
            <input
              type="text"
              name="item_name"
              value={formData.item_name}
              onChange={handleChange}
            />
            {errors.item_name && <p className="error">{errors.item_name}</p>}
          </label>
          <label>
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </label>
          <label>
            Category
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              {/* Add other categories */}
            </select>
            {errors.category && <p className="error">{errors.category}</p>}
          </label>
        </div>

        <div className="add-inventory__section">
          <h2 className="add-inventory__title">Item Availability</h2>
          <label>
            Status
            <div>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="in stock"
                  checked={formData.status === "in stock"}
                  onChange={handleChange}
                />
                In Stock
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="out of stock"
                  checked={formData.status === "out of stock"}
                  onChange={handleChange}
                />
                Out of Stock
              </label>
            </div>
          </label>
          {formData.status === "in stock" && (
            <label>
              Quantity
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
              {errors.quantity && <p className="error">{errors.quantity}</p>}
            </label>
          )}
          <label>
            Warehouse
            <select
              name="warehouse_id"
              value={formData.warehouse_id}
              onChange={handleChange}
            >
              <option value="">Select a warehouse</option>
              {warehousesData.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </option>
              ))}
            </select>
            {errors.warehouse_id && (
              <p className="error">{errors.warehouse_id}</p>
            )}
          </label>
        </div>

        <div className="add-inventory__actions">
          <button
            type="button"
            className="add-inventory__cancel-btn"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button type="submit" className="add-inventory__submit-btn">
            + Add Item
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddInventoryItemForm;
