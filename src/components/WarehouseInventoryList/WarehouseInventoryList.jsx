import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./WarehouseInventoryList.scss";

function WarehouseInventoryList() {
	const { id } = useParams(); // Assuming warehouse ID is passed as a param
	const [inventory, setInventory] = useState([]);

	useEffect(() => {
		const fetchInventory = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3030/warehouses/${id}/inventory`
				);
				setInventory(response.data);
			} catch (error) {
				console.error("Error fetching inventory:", error);
			}
		};

		fetchInventory();
	}, [id]);

	return (
		<section className="inventory-list">
			<div className="inventory-list__headings">
				<div className="inventory-list__heading">
					<h4 className="inventory-list__label">INVENTORY ITEM</h4>
					<button className="inventory-list__sort-btn">
						<svg
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
					</button>
				</div>
				<div className="inventory-list__heading">
					<h4 className="inventory-list__label">CATEGORY</h4>
					<button className="inventory-list__sort-btn">
						<svg
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
					</button>
				</div>
				<div className="inventory-list__heading">
					<h4 className="inventory-list__label">STATUS</h4>
					<button className="inventory-list__sort-btn">
						<svg
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
					</button>
				</div>
				<div className="inventory-list__heading">
					<h4 className="inventory-list__label">QTY</h4>
					<button className="inventory-list__sort-btn">
						<svg
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
					</button>
				</div>
				<h4 className="inventory-list__label inventory-list__label--actions">
					ACTIONS
				</h4>
			</div>
			<div className="inventory-list__items">
				{inventory.map((item) => (
					<div key={item.id} className="inventory-list__item">
						<div className="inventory-list__details">
							<a
								href={`/inventory/${item.id}`}
								className="inventory-list__link"
							>
								{item.item_name}
							</a>
							<p className="inventory-list__category">
								{item.category}
							</p>
							<p
								className={`inventory-list__status ${item.status.toLowerCase()}`}
							>
								{item.status}
							</p>
							<p className="inventory-list__quantity">
								{item.quantity}
							</p>
						</div>
						<div className="inventory-list__actions">
							<button className="inventory-list__action-btn">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
										fill="#2E66E6"
									/>
								</svg>
							</button>
							<button className="inventory-list__action-btn">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
										fill="#C94515"
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default WarehouseInventoryList;
