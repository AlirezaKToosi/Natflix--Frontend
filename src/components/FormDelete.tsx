// MPM packages
import { FormEvent } from "react";

// Project files
import { useModal } from "state/ModalContext";

interface iProps {
  endPoint: string;
  id: number;
}

export default function FormDelete({ endPoint, id }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch(endPoint + id, {
      method: "delete",
    })
      .then(onSuccess)
      .catch((error) => onFailure(error));
  }

  function onSuccess() {
    alert("Item deleted!");
    setModal(null);
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not delete item");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Delete information</h2>
      <p>
        Are you sure that you want to delete this item? This action cannot be
        reverted.
      </p>
      <hr />
      <button className="button-gray">Delete</button>
      <button className="button-gray" onClick={() => setModal(null)}>
        Keep
      </button>
    </form>
  );
}
