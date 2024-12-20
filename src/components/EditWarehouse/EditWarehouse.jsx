import "./EditWarehouse.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function EditWarehouse() {
	const navigate = useNavigate();

	// Function to handle the back button click
	const handleBack = () => {
		navigate(-1); // Navigates to the previous page
	};

	return (
		<div className="edit-warehouse">
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
						<path
							d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
							fill="#2E66E6"
						/>
					</svg>
				</button>
				<h1 className="edit-warehouse__title">Edit Warehouse</h1>
			</header>
		</div>
	);
}
