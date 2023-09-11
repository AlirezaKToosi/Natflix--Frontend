// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import ModalDetails from "components/ModalDetails";
import iMedia from "types/iMedia";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iMedia;
}

export default function ItemCard({ item }: iProps) {
  const { thumbnail_url } = item;

  // Global state
  const { setModal } = useModal();

  // Properties
  const Image = thumbnail_url === "" ? Placeholder : thumbnail_url;

  // Components
  const Modal = <ModalDetails item={item} />;

  return (
    <article className="item-card" onClick={() => setModal(Modal)}>
      <img src={Image} />
    </article>
  );
}
