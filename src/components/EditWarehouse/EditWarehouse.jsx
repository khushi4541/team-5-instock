import "./EditWarehouse.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EditWarehouse() {
	const navigate = useNavigate();
	const { id } = useParams();

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

	// State for errors
	const [errors, setErrors] = useState({});

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
	};

	// Function to validate the form
	const validateForm = () => {
		const newErrors = {};

		// Check required fields
		Object.entries(formData).forEach(([key, value]) => {
			if (!value.trim()) {
				newErrors[key] = "This field is required.";
			}
		});

		// Validate phone number format
		const phoneRegex = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/;
		if (
			formData.contact_phone &&
			!phoneRegex.test(formData.contact_phone)
		) {
			newErrors.contact_phone = "Invalid phone number format.";
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (
			formData.contact_email &&
			!emailRegex.test(formData.contact_email)
		) {
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
			await axios.put(`http://localhost:3030/warehouses/${id}`, formData);
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
				<button
					className="edit-warehouse__back-button"
					onClick={handleBack}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
					</svg>
				</button>
				<h1 className="edit-warehouse__title">Edit Warehouse</h1>
			</header>
			<div className="edit-warehouse__divider"></div>
			<form className="edit-warehouse__form" onSubmit={handleSubmit}>
				<div className="edit-warehouse__section">
					<h2 className="edit-warehouse__section-title">
						Warehouse Details
					</h2>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">
							Warehouse Name
						</h3>
						<input
							type="text"
							className="edit-warehouse__input"
							name="warehouse_name"
							value={formData.warehouse_name}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">
							Street Address
						</h3>
						<input
							type="text"
							className="edit-warehouse__input"
							name="address"
							value={formData.address}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">City</h3>
						<input
							type="text"
							className="edit-warehouse__input"
							name="city"
							value={formData.city}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">Country</h3>
						<input
							type="text"
							className="edit-warehouse__input"
							name="country"
							value={formData.country}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="edit-warehouse__separator"></div>
				<div className="edit-warehouse__section">
					<h2 className="edit-warehouse__section-title">
						Contact Details
					</h2>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">Contact Name</h3>
						<input
							type="text"
							className="edit-warehouse__input"
							name="contact_name"
							value={formData.contact_name}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">Position</h3>
						<input
							type="text"
							className="edit-warehouse__input"
							name="contact_position"
							value={formData.contact_position}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">Phone Number</h3>
						<input
							type="text"
							className="edit-warehouse__input"
							name="contact_phone"
							value={formData.contact_phone}
							onChange={handleInputChange}
						/>
					</div>
					<div className="edit-warehouse__form-group">
						<h3 className="edit-warehouse__label">Email</h3>
						<input
							type="email"
							className="edit-warehouse__input"
							name="contact_email"
							value={formData.contact_email}
							onChange={handleInputChange}
						/>
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
					<button type="submit" className="edit-warehouse__save">
						Save
					</button>
				</div>
			</form>
		</section>
	);
}
