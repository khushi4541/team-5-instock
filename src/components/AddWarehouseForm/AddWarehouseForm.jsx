import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../utils/api";
import "./AddWarehouseForm.scss";

function AddWarehouseForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors && name !== "") {
      setErrors({});
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const formFields = [
      "warehouse_name",
      "address",
      "city",
      "country",
      "contact_name",
      "contact_position",
      "contact_phone",
      "contact_email",
    ];

    // Check required fields
    formFields.forEach((field) => {
      const value = formData[field];
      if (!value || !value.trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    // Validate phone number format
    const phoneRegex = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/;
    if (formData.contact_phone && !phoneRegex.test(formData.contact_phone)) {
      newErrors.contact_phone = "Invalid phone number format.";
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.contact_email && !emailRegex.test(formData.contact_email)) {
      newErrors.contact_email = "Invalid email format.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form
    if (!validateForm()) return;
    try {
      await axios.post(`${baseURL}/warehouses/`, formData);
      setErrors({}); // Clear errors
      navigate(-1); // Go back to the previous page
    } catch (error) {
      console.error("Error adding warehouse:", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="add-warehouse">
      <header className="add-warehouse__header">
        <svg
          className="add-warehouse__arrow"
          onClick={handleBack}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
        </svg>
        <h1 className="add-warehouse__heading">Add New Warehouse</h1>
      </header>
      <form action="" className="add-warehouse__form">
        <div className="add-warehouse__form-content">
          <article className="add-warehouse__section">
            <h2 className="add-warehouse__title">Warehouse Details</h2>

            {[
              { label: "Warehouse Name", name: "warehouse_name" },
              { label: "Street Address", name: "address" },
              { label: "City", name: "city" },
              { label: "Country", name: "country" },
            ].map(({ label, name }) => (
              <div className="add-warehouse__form-group" key={name}>
                <h3 className="add-warehouse__label">{label}</h3>
                <input
                  type="text"
                  className={`add-warehouse__input ${
                    errors[name] ? "add-warehouse__input--error" : ""
                  }`}
                  name={name}
                  value={formData[name]}
                  placeholder={label}
                  onChange={handleInputChange}
                />
                {errors[name] && (
                  <div className="add-warehouse__error-message">
                    <svg
                      className="add-warehouse__error-icon"
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
          </article>
          <article className="add-warehouse__section add-warehouse__section--border">
            <h2 className="add-warehouse__title ">Contact Details</h2>

            {[
              { label: "Contact Name", name: "contact_name" },
              { label: "Position", name: "contact_position" },
              { label: "Phone Number", name: "contact_phone" },
              { label: "Email", name: "contact_email" },
            ].map(({ label, name }) => (
              <div className="add-warehouse__form-group" key={name}>
                <h3 className="add-warehouse__label">{label}</h3>
                <input
                  type={name === "contact_email" ? "email" : "text"}
                  className={`add-warehouse__input ${
                    errors[name] ? "add-warehouse__input--error" : ""
                  }`}
                  name={name}
                  placeholder={label}
                  value={formData[name]}
                  onChange={handleInputChange}
                />
                {errors[name] && (
                  <div className="add-warehouse__error-message">
                    <svg
                      className="add-warehouse__error-icon"
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
            + Add Warehouse
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddWarehouseForm;
