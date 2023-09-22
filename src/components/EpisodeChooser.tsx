// Node modules
import { ChangeEvent, useState } from "react";

// Project files
import ItemEpisodes from "components/ItemEpisode";
import InputSelect from "components/InputSelect";
import iDetailsSeries from "interfaces/iDetailsSeries";
import SeriesUtilities from "scripts/seriesUtilities";
import iInputSelect from "interfaces/iInputSelect";

interface iProps {
  episodes: iDetailsSeries[];
  onClick: Function;
}

export default function EpisodeChooser({ episodes, onClick }: iProps) {
  // Local state
  const [data, setData] = useState({ season_number: 1 });

  // Properties
  const numberOfSeasons = SeriesUtilities.getSeasonsNumber(episodes);
  const currentEpisodes = SeriesUtilities.getEpisodes(
    episodes,
    data.season_number
  );
  const inputSelectLabels = SeriesUtilities.getSeasonLabels(numberOfSeasons);
  const fields: iInputSelect = {
    key: "season_number",
    label: "",
    options: inputSelectLabels,
    type: "select",
  };

  // Components
  const Episodes = currentEpisodes.map((item) => (
    <ItemEpisodes key={item.id} item={item} onClick={onClick} />
  ));

  return (
    <section className="episode-chooser">
      <header>
        <h2>Episodes</h2>
        <InputSelect field={fields} state={[data, setData]} />
      </header>
      <div>{Episodes}</div>
    </section>
  );
}
