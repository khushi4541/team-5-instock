import EditInventoryForm from "../../components/EditInventoryForm/EditInventoryForm";

export default function InventoryEditPage({ fetchWarehouses, warehousesData}) {
  return (
    <>
      <EditInventoryForm fetchWarehouses={fetchWarehouses} warehousesData={warehousesData} />
    </>
  );
}
