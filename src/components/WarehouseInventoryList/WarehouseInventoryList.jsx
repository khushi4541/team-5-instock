import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./WarehouseInventoryList.scss";

function WarehouseInventoryList({ handleDeleteClick }) {
	const { id } = useParams();
	const [inventory, setInventory] = useState([]);

	useEffect(() => {
		const fetchInventory = async () => {
			const url = `http://localhost:3030/warehouses/${id}/inventory`;
			try {
				const response = await axios.get(url);
				setInventory(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchInventory();
	}, [id]);

	return (
		<section className="warehouse-inventory">
			<div className="warehouse-inventory__headings">
				<div className="warehouse-inventory__label-container">
					<h4 className="warehouse-inventory__label">
						INVENTORY ITEM
					</h4>
					<svg
						className="warehouse-inventory__icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
							fill="#5C667E"
						/>
					</svg>
				</div>
				<div className="warehouse-inventory__label-container">
					<h4 className="warehouse-inventory__label">CATEGORY</h4>
					<svg
						className="warehouse-inventory__icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
							fill="#5C667E"
						/>
					</svg>
				</div>
				<div className="warehouse-inventory__label-container">
					<h4 className="warehouse-inventory__label">STATUS</h4>
					<svg
						className="warehouse-inventory__icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
							fill="#5C667E"
						/>
					</svg>
				</div>
				<div className="warehouse-inventory__label-container">
					<h4 className="warehouse-inventory__label">QTY</h4>
					<svg
						className="warehouse-inventory__icon"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z"
							fill="#5C667E"
						/>
					</svg>
				</div>
				<h4 className="warehouse-inventory__label warehouse-inventory__label--actions">
					ACTIONS
				</h4>
			</div>

			<div className="warehouse-inventory__list">
				{inventory.map((item) => (
					<div key={item.id} className="warehouse-inventory__item">
						<Link
							to={`/inventories/${item.id}`}
							className="warehouse-inventory__link"
							data-label="Inventory Item"
						>
							<span>
								{item.item_name}
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
										fill="#2E66E6"
									/>
								</svg>
							</span>
						</Link>
						<p
							className="warehouse-inventory__category"
							data-label="Category"
						>
							{item.category}
						</p>
						<span className="warehouse-inventory__badge-container">
							<span className="warehouse-inventory__badge-label">
								Status
							</span>
							<span
								className={`warehouse-inventory__badge ${
									item.status.toLowerCase() === "in stock"
										? "in-stock"
										: "out-of-stock"
								}`}
							>
								{item.status}
							</span>
						</span>

						<p
							className="warehouse-inventory__quantity"
							data-label="Quantity"
						>
							{item.quantity}
						</p>
						<div
							className="warehouse-inventory__actions"
							data-label="Actions"
						>
							<button onClick={() => handleDeleteClick(item)}>
								<svg
									width="24"
									height="24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
										fill="#C94515"
									/>
								</svg>
							</button>
							<Link
								to={`/inventory/${item.id}/edit`}
								className="warehouse-inventory__edit"
							>
								<svg
									width="24"
									height="24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
										fill="#2E66E6"
									/>
								</svg>
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default WarehouseInventoryList;
