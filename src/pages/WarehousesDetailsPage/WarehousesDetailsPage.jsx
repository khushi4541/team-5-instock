import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

export default function WarehousesDetailsPage() {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [inventory, setInventory] = useState([]);

    // Fetch inventory for the selected warehouse
    const fetchInventory = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/warehouses/${id}/inventory`);
            setInventory(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchInventory();
    }, [id]);

    // Open the delete modal
    const handleDeleteClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    // Close the delete modal
    const handleCloseModal = () => {
        setSelectedItem(null);
        setShowModal(false);
    };

    // Confirm delete and refresh inventory
    const handleConfirmDelete = async () => {
        if (selectedItem) {
            try {
                await axios.delete(`http://localhost:3030/inventories/${selectedItem.id}`);
                setShowModal(false);
                setSelectedItem(null);
                fetchInventory(); // Refresh the inventory list
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <WarehouseInventoryList 
                inventory={inventory} 
                handleDeleteClick={handleDeleteClick} 
            />
            {selectedItem && (
                <DeleteModal
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    handleConfirmDelete={handleConfirmDelete}
                    heading={`Delete ${selectedItem.item_name}?`}
                    message={`Please confirm that you’d like to delete ${selectedItem.item_name} from the inventory. This action cannot be undone.`}
                />
            )}
        </>
    );
}
