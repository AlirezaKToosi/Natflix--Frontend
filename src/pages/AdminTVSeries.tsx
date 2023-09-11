// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import FormCreate from "components/FormCreate";
import NavigationBarAdmin from "components/NavigationBarAdmin";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import fields from "data/fields-tv-series-episodes.json";
import eStatus from "types/eStatus";
import iTVSeries from "types/iTVSeries";
import Item from "components/ItemAdminEpisode";
import { useModal } from "state/ModalContext";

export default function AdminDetailSeries() {
  // Global state
  const { code } = useParams();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iTVSeries>());

  // Properties
  const endPoint: string = "tv-series/:id/";

  // Methods
  useEffect(() => {
    fakeFetch(endPoint, code)
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: iTVSeries[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  // Components
  const Create = <FormCreate fields={fields} endPoint={endPoint} />;
  const Items = data.map((item) => (
    <Item key={item.id} item={item} endPoint={endPoint} fields={fields} />
  ));

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;

  return (
    <div className="admin-pages">
      <NavigationBarAdmin />
      <h1>TV Series episodes</h1>
      {data.length === 0 ? <StatusEmpty /> : Items}
      <hr />
      <button className="primary" onClick={() => setModal(Create)}>
        Create episode
      </button>
    </div>
  );
}
