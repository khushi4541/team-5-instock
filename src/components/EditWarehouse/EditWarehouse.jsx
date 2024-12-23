import "./EditWarehouse.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditWarehouse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  // State for form fields
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

  


  // Fetch warehouse data when the component loads
  useEffect(() => {
    const fetchWarehouse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3030/warehouses/${id}`
        );
        // Populate the form with the fetched data
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };
    fetchWarehouse();
  }, [id]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors && name !== "") {
      setErrors({});
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Specify only the fields that should be validated
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
      console.log(`Validating field: ${field}, value: ${value}`);
      if (!value || !value.trim()) {
        newErrors[field] = "This field is required.";
        console.log(`Field ${field} is empty.`);
      }
    });

    // Validate phone number format
    const phoneRegex = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/;
    if (formData.contact_phone && !phoneRegex.test(formData.contact_phone)) {
      newErrors.contact_phone = "Invalid phone number format.";
      console.log("Invalid phone number format.");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.contact_email && !emailRegex.test(formData.contact_email)) {
      newErrors.contact_email = "Invalid email format.";
      console.log("Invalid email format.");
    }

    setErrors(newErrors);

    // Return true if no errors
    console.log("Validation errors:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted!"); // Debugging log
    console.log("Validation result:", validateForm());

    // Validate form
    if (!validateForm()) return;
    try {
      console.log("Attempting to send formData:", formData);
      await axios.put(`http://localhost:3030/warehouses/${id}`, formData);
      console.log("Data successfully sent!");

      navigate(-1); // Go back to the previous page
    } catch (error) {
      console.error("Error updating warehouse:", error);
    }
  };

  // Function to handle the back button click
  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <section className="edit-warehouse">
      <header className="edit-warehouse__header">
        <svg
          className="edit-warehouse__arrow"
          onClick={handleBack}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
        </svg>
        <h1 className="edit-warehouse__title">Edit Warehouse</h1>
      </header>
      <form className="edit-warehouse__form" onSubmit={handleSubmit}>
        <div className="edit-warehouse__form-content">
          <div className="edit-warehouse__section">
            <h2 className="edit-warehouse__section-title">Warehouse Details</h2>
            {[
              { label: "Warehouse Name", name: "warehouse_name" },
              { label: "Street Address", name: "address" },
              { label: "City", name: "city" },
              { label: "Country", name: "country" },
            ].map(({ label, name }) => (
              <div className="edit-warehouse__form-group" key={name}>
                <h3 className="edit-warehouse__label">{label}</h3>
                <input
                  type="text"
                  className={`edit-warehouse__input ${
                    errors[name] ? "edit-warehouse__input--error" : ""
                  }`}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                />
                {errors[name] && (
                  <div className="edit-warehouse__error-message">
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
          </div>
          <div className="edit-warehouse__section add-warehouse__section--border">
            <h2 className="edit-warehouse__section-title">Contact Details</h2>
            {[
              { label: "Contact Name", name: "contact_name" },
              { label: "Position", name: "contact_position" },
              { label: "Phone Number", name: "contact_phone" },
              { label: "Email", name: "contact_email" },
            ].map(({ label, name }) => (
              <div className="edit-warehouse__form-group" key={name}>
                <h3 className="edit-warehouse__label">{label}</h3>
                <input
                  type={name === "contact_email" ? "email" : "text"}
                  className={`edit-warehouse__input ${
                    errors[name] ? "edit-warehouse__input--error" : ""
                  }`}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                />
                {errors[name] && (
                  <div className="edit-warehouse__error-message">
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
          </div>
        </div>
        <div className="edit-warehouse__actions">
          <button
            type="button"
            className="edit-warehouse__cancel"
            onClick={handleBack}
          >
            Cancel
          </button>
          <button
            type="button"
            className="edit-warehouse__save"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
