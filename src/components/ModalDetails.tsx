// Fake data
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Project files
import EpisodeChooser from "components/EpisodeChooser";
import HeroDetails from "components/HeroDetails";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import { useModal } from "state/ModalContext";
import eStatus from "types/eStatus";
import iMedia from "types/iMedia";
import eMediaType from "types/eMediaType";
import iDetailsOther from "types/iDetailsOther";
import iTVSeries from "types/iTVSeries";
import DetailsMovie from "./DetailsMovie";
import DetailsDocumentary from "./DetailsDocumentary";

interface iProps {
  item: iMedia;
}

export default function ModalDetails({ item }: iProps) {
  const { id, title, summary, media_type_id } = item;

  // Global state
  const navigate = useNavigate();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [dataOther, setDataOther] = useState({} as iDetailsOther);
  const [dataSerie, setDataSerie] = useState(Array<iTVSeries>);

  // Properties
  const isTVSeries: boolean = media_type_id === eMediaType.SERIES;
  const isMovie: boolean = media_type_id === eMediaType.MOVIES;
  const isDocumentary: boolean = media_type_id === eMediaType.DOCUMENTARIES;
  const emptyOther: boolean = Object(dataOther).length === 0;
  const emptySeries: boolean = dataSerie.length === 0;
  const endPoint = chooseEndPoint(media_type_id);
  const videoCode = isTVSeries
    ? dataSerie[0]?.video_code
    : dataOther.video_code;

  // Methods
  useEffect(() => {
    fakeFetch(endPoint, id)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: any) {
    isTVSeries ? setDataSerie(data) : setDataOther(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  function chooseEndPoint(media_type_id: number) {
    switch (media_type_id) {
      case eMediaType.MOVIES:
        return "movies/:id/";
      case eMediaType.DOCUMENTARIES:
        return "documentaries/:id/";
      case eMediaType.SERIES:
        return "tv-series/:id/";
      default:
        throw new Error(`Invalid media type id ${media_type_id}`);
    }
  }

  function goVideo(videoCode: string): void {
    navigate(`video/${videoCode}`);
    setModal(null);
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (emptyOther && emptySeries) return <StatusEmpty />;

  return (
    <div className="modal-details">
      <HeroDetails item={item} videoCode={videoCode} onClick={goVideo} />
      <section className="description">
        {isMovie && <DetailsMovie details={dataOther} />}
        {isDocumentary && <DetailsDocumentary details={dataOther} />}
        <h2>{title}</h2>
        <p>{summary}</p>
      </section>
      {isTVSeries && <EpisodeChooser episodes={dataSerie} onClick={goVideo} />}
    </div>
  );
}
