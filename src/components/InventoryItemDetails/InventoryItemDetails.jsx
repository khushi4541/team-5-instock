import "./InventoryItemDetails.scss";
import { useParams } from "react-router-dom";
import { baseURL } from "../../../utils/api";

function InventoriesItemDetails() {
  const { id } = useParams();

  const [inventories, setinventories] = useState(null);

  useEffect(() => {
    const fetchinventories = async () => {
      const url = `${baseURL}/inventories/${id}`;
      try {
        const response = await axios.get(url);
        setinventories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchinventories();
  }, [id]);

  if (!inventories) {
    return <div>Item not found</div>;
  }

  const statusClass =
    inventoryId.status.toLowerCase() === "in stock"
      ? "items__status-tag--in-stock"
      : "items__status-tag--out-of-stock";

  return (
    <article className="item">
      <div className="item__header">
        <div className="item__selected">
          <Link to="/inventories" className="item__back-link">
            <svg
              className="item__arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L13.59 7.41L18.17 12L13.59 16.59L15 18L21 12L15 6Z"
                fill="#2E66E6"
              />
            </svg>
          </Link>
          <p className="item__name">{inventoryId.item_name}</p>
        </div>
        <button className="item__edit-button">Edit</button>
      </div>

      <div className="item__details">
        <div className="item__info-group">
          <h4 className="item__label">Item Description</h4>
          <p className="item__info">{inventoryId.description}</p>
          <h4 className="item__label">Category</h4>
          <p className="item__info">{inventoryId.category}</p>
        </div>

        <div className="item__info-group">
          <h4 className="item__label">Status</h4>
          <p className={`item__status-tag ${statusClass}`}>
            {inventoryId.status}
          </p>
          <h4 className="item__label">QTY</h4>
          <p className="item__info">{inventoryId.quantity}</p>
          <h4 className="item__label">Warehouse</h4>
          <p className="item__info">{inventoryId.warehouse_name}</p>
        </div>
      </div>
    </article>
  );
}

export default inventoriesItemDetails;
