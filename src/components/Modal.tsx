// NPM packages
import { createPortal } from "react-dom";

// Project files
import { useModal } from "state/ModalContext";

export default function Modal() {
  const { modal, setModal } = useModal();

  // Properties
  const id = "portal";
  const element = document.getElementById(id);

  // Safeguard
  if (element === null) throw new Error(`No div with id ${id} on index.html`);
  if (modal === null) return null;

  return createPortal(
    <div className="modal">
      <div className="background" role="button" onClick={() => setModal(null)}>
        {/* empty on purpose */}
      </div>
      <div className="window">{modal}</div>
    </div>,
    element
  );
}
