// Fake data (replace this with a real fetch)
import fakeFetch from "scripts/fakeFetch";

// Node modules
import { useParams } from "react-router-dom";

// Project files
import HeroHome from "components/HeroHome";
import ContainerCards from "components/ListCards";
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "types/eStatus";
import iMedia from "types/iMedia";
import { useState, useEffect } from "react";

export default function Media() {
  // Global state
  const { code } = useParams();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iMedia>());

  // Properties
  const endPoint = "media/";

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

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (data.length === 0) return <StatusEmpty />;

  return (
    <div id="media">
      <NavigationBar />
      <h1>All our {code}</h1>
      <ContainerCards title="Titles avaialble" data={data} />
    </div>
  );
}
