// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import FormUpdate from "components/FormUpdate";
import FormDelete from "components/FormDelete";
import { useModal } from "state/ModalContext";
import iTVSeries from "types/iTVSeries";

interface iProps {
  item: iTVSeries;
  endPoint: string;
  fields: Array<any>;
}

export default function ItemAdminEpisode({ item, endPoint, fields }: iProps) {
  const { id, title, season_number, episode_number, thumbnail_url } = item;

  // Global
  const { setModal } = useModal();

  // Properties
  const Image = thumbnail_url === "" ? Placeholder : thumbnail_url;

  // Components
  const Update = <FormUpdate endPoint={endPoint} fields={fields} data={item} />;
  const Delete = <FormDelete endPoint={endPoint} id={id} />;

  return (
    <article className="item-admin">
      <img src={Image} />
      <h3>{title}</h3>
      <div className="season-episode">
        <span className="title">Season & Episode</span>
        <span className="numbers">
          S{season_number}-E{episode_number}
        </span>
      </div>
      <div className="buttons">
        <button onClick={() => setModal(Update)}>Update</button>
        <button onClick={() => setModal(Delete)}>Delete</button>
      </div>
    </article>
  );
}
