import InventoryItemDetails from "../../components/InventoryItemDetails/InventoryItemDetails";
import { useParams } from "react-router-dom";

export default function InventoryDetailsPage() {
  const { id } = useParams(); // Get the ID from the URL
  return (
    <>
      <InventoryItemDetails id={id} /> {/* Pass the ID as a prop */}
    </>
  );
}