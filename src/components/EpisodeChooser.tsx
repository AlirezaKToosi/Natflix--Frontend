// Node modules
import { useState } from "react";

// Project files
import ItemEpisodes from "components/ItemEpisode";
import InputSelect from "components/InputSelect";
import iTVSeries from "types/iTVSeries";
import Utilities from "scripts/seriesUtilities";
import iInputSelect from "types/iInputSelect";

interface iProps {
  episodes: iTVSeries[];
  onClick: Function;
}

export default function EpisodeChooser({ episodes, onClick }: iProps) {
  // Local state
  const [data, setData] = useState({ season_number: 1 });

  // Properties
  const totalSeasons = Utilities.getTotalSeasons(episodes);
  const currentEpisodes = Utilities.getEpisodes(episodes, data.season_number);
  const inputSelectLabels = Utilities.getSeasonLabels(totalSeasons);
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
