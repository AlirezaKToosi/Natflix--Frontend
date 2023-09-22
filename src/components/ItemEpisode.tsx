// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import iDetailsSeries from "interfaces/iDetailsSeries";

interface iProps {
  item: iDetailsSeries;
  onClick: Function;
}

export default function ItemEpisode({ item, onClick }: iProps) {
  const { episode_number, title, summary, thumbnail_url, video_code } = item;

  return (
    <article className="item-episode" onClick={() => onClick(video_code)}>
      <span className="number">{episode_number}</span>
      <img
        src={thumbnail_url}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
      <div className="content">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </article>
  );
}
