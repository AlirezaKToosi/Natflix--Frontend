// Project files
import IconInfo from "assets/images/icons/icon-info-white.svg";
import Placeholder from "assets/images/placeholders/banner.png";
import ModalDetails from "components/ModalDetails";
import iMedia from "types/iMedia";
import { useModal } from "state/ModalContext";

interface iProps {
  item: iMedia;
}

export default function HeroHome({ item }: iProps) {
  const { banner_url, title, summary } = item;

  // Global state
  const { setModal } = useModal();

  // Properties
  const Image = banner_url === "" ? Placeholder : banner_url;

  // Components
  const Modal = <ModalDetails item={item} />;

  return (
    <header className="hero hero-home">
      <img className="background-image" src={Image} />
      <div className="content">
        <h1>{title}</h1>
        <p>{summary}</p>
        <button onClick={() => setModal(Modal)}>
          <img className="icon" src={IconInfo} />
          More info
        </button>
      </div>
    </header>
  );
}
