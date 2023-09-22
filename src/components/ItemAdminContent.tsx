// Project files
import iContent from "interfaces/iContent";
import Placeholder from "assets/images/placeholders/card-basic.png";

interface iProps {
  item: iContent;
  actions: Function[];
}

export default function ItemAdminContent({ item, actions }: iProps) {
  const { id, title, logo_url } = item;
  const [onUpdate, onDelete, onDetails] = actions;

  return (
    <article className="item-admin">
      <span className="number">{id}</span>
      <img
        src={logo_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
      <h3>{title}</h3>
      <div className="buttons">
        <button className="button-gray" onClick={() => onDetails(item)}>
          Details
        </button>
        <button className="button-gray" onClick={() => onUpdate(item)}>
          Update
        </button>
        <button className="button-gray" onClick={() => onDelete(item)}>
          Delete
        </button>
      </div>
    </article>
  );
}
