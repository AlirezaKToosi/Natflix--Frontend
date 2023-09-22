// MPM packages
import { FormEvent, useState } from "react";

// Project files
import ListInput from "components/ListInput";
import { generateFields } from "scripts/formUtilities";
import { useModal } from "state/ModalContext";

interface iProps {
  endPoint: string;
  fields: Array<any>;
  data: any;
}

export default function FormUpdate({ endPoint, fields, data }: iProps) {
  // Global state
  const { setModal } = useModal();

  // Local state
  const [form, setForm] = useState(generateFields(fields, data));

  // Methods
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const editedItem = { ...form, id: data.id };
    event.preventDefault();
    fetch(endPoint + "/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(editedItem),
    })
      .then(onSuccess)
      .catch((error) => onFailure(error));
  }

  function onSuccess() {
    alert("Item edited!");
    setModal(null);
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not edit item");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>New information</h2>
      <ListInput fields={fields} state={[form, setForm]} />
      <hr />
      <button className="button-gray">Update</button>
      <button className="button-gray" onClick={() => setModal(null)}>
        Cancel
      </button>
    </form>
  );
}
