// Node modules
import { useParams } from "react-router-dom";

// Project files
import BannerHome from "components/HeroHome";
import ContainerCards from "components/ListCards";
import NavigationBar from "components/NavigationBar";
import StatusEmpty from "components/StatusEmpty";
import StatusError from "components/StatusError";
import StatusLoading from "components/StatusLoading";
import eStatus from "interfaces/eStatus";
import iContent from "interfaces/iContent";
import { useState, useEffect } from "react";

export default function Content() {
  // Global state
  const { code } = useParams();

  // Local state
  const [status, setStatus] = useState(eStatus.LOADING);
  const [data, setData] = useState(new Array<iContent>());

  // Methods
  useEffect(() => {
    setStatus(eStatus.LOADING);
    fetch( code + "/")
      .then((response) => response.json())
      .then((result) => onSuccess(result))
      .catch((error) => onFailure(error));
  }, [code]);

  function onSuccess(data: iContent[]) {
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
    <div id="content">
      <NavigationBar />
      <header>
        <h1>All our {code}</h1>
      </header>
      <ContainerCards title="Titles avaialble" data={data} />
    </div>
  );
}
