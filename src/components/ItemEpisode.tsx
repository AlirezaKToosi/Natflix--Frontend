// Project files
import Placeholder from "assets/images/placeholders/card-basic.png";
import iTVSeries from "types/iTVSeries";

interface iProps {
  item: iTVSeries;
  onClick: Function;
}

export default function ItemEpisode({ item, onClick }: iProps) {
  const { episode_number, title, summary, thumbnail_url, video_code } = item;

  // Properties
  const Image = thumbnail_url === "" ? Placeholder : thumbnail_url;

  return (
    <article className="item-episode" onClick={() => onClick(video_code)}>
      <span className="number">{episode_number}</span>
      <img src={Image} />
      <div className="content">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </article>
  );
}
