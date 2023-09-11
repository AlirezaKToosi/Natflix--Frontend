// Node modules
import { Link } from "react-router-dom";

// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import FormUpdate from "components/FormUpdate";
import FormDelete from "components/FormDelete";
import { useModal } from "state/ModalContext";
import iMedia from "types/iMedia";
import eMediaType from "types/eMediaType";

interface iProps {
  item: iMedia;
  endPoint: string;
  fields: Array<any>;
}

export default function ItemAdminMedia({ item, endPoint, fields }: iProps) {
  const { id, media_type_id, title, thumbnail_url } = item;

  // Global
  const { setModal } = useModal();

  // Properties
  const Image = thumbnail_url === "" ? Placeholder : thumbnail_url;

  // Components
  const Update = <FormUpdate endPoint={endPoint} fields={fields} data={item} />;
  const Delete = <FormDelete endPoint={endPoint} id={id} />;
  const TVSeriesEpisodes = (
    <Link className="button" to={"/admin-tv-series/" + id}>
      Episodes
    </Link>
  );

  return (
    <article className="item-admin">
      <img src={Image} />
      <h3>{title}</h3>
      <div className="buttons">
        <button onClick={() => setModal(Update)}>Update</button>
        <button onClick={() => setModal(Delete)}>Delete</button>
        {media_type_id === eMediaType.SERIES && TVSeriesEpisodes}
      </div>
    </article>
  );
}
