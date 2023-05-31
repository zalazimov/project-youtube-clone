import React, { useState } from "react";
import Modal from "../Modal/Modal";

function ErrorPage() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="container mt-3 alert alert-dark w-50" role="alert">
        No Results yet! Please submit a search above!
      </div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModal(!modal);
        }}
      >
        Click Me!!
      </button>
      <div>{modal && <Modal closeModal={setModal} />}</div>
    </div>
  );
}

export default ErrorPage;
