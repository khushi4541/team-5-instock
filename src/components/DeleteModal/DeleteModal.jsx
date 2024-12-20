import "./DeleteModal.scss";

function DeleteModal({
  message,
  heading,
  showModal,
  handleCloseModal,
  handleConfirmDelete,
}) {
  if (showModal === false) {
    return null;
  }
  
  return (
    <div className="modal">
      <article className="modal__foreground">
        <div className="modal__body">
          <svg
            onClick={handleCloseModal}
            className="modal__close"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#13182C"
            />
          </svg>
          <h1 className="modal__heading">{heading}</h1>
          <p className="modal__message">{message}</p>
        </div>
        <div className="modal__buttons">
          <button className="modal__cancel" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="modal__delete" onClick={handleConfirmDelete}>
            Delete
          </button>
        </div>
      </article>
    </div>
  );
}

export default DeleteModal;
