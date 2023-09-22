// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import ModalDetails from "components/ModalDetails";
import iContent from "interfaces/iContent";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iContent;
}

export default function ItemCard({ item }: iProps) {
  const { thumbnail_url } = item;

  // Global state
  const { setModal } = useModal();

  // Components
  const Modal = <ModalDetails item={item} />;

  return (
    <article onClick={() => setModal(Modal)} className="item-card">
      <img
        src={thumbnail_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
    </article>
  );
}
