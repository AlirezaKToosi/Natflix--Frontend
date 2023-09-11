// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Project files
import FormCreate from "components/FormCreate";
import Item from "components/ItemAdminMedia";
import NavigationBarAdmin from "components/NavigationBarAdmin";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import FieldsDocumentaries from "data/fields-documentaries.json";
import FieldsMovies from "data/fields-movies.json";
import FieldsTVSeries from "data/fields-tv-series.json";
import eStatus from "types/eStatus";
import iMedia from "types/iMedia";
import { useModal } from "state/ModalContext";

export default function AdminMedia() {
  // Global state
  const { code } = useParams();
  const { setModal } = useModal();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iMedia>());

  // Properties
  const endPoint: string = "media/";
  const fields = chooseFields(code);

  // Methods
  useEffect(() => {
    fakeFetch(endPoint + code + "/")
      .then((response) => onSuccess(response.data))
      .catch((error) => onFailure(error));
  }, [code]);

  function onSuccess(data: iMedia[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  function chooseFields(code: string | undefined) {
    switch (code) {
      case "tv-series":
        return FieldsTVSeries;
      case "documentaries":
        return FieldsDocumentaries;
      case "movies":
        return FieldsMovies;
      default:
        throw new Error(`Invalid code: ${code}`);
    }
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
      <h1>Edit {code}</h1>
      {data.length === 0 ? <StatusEmpty /> : Items}
      <hr />
      <button className="primary" onClick={() => setModal(Create)}>
        Create content
      </button>
    </div>
  );
}
