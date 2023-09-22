// Node modules
import { Link, useParams } from "react-router-dom";

// Project files
import IconArrowBack from "assets/images/icons/icon-back-white.svg";

export default function VideoPlayer() {
  // Global state
  const { code } = useParams();

  // Properties
  const videoSource = `https://youtube.com/embed/${code}`;

  return (
    <div id="video-player">
      <Link className="button-back" to="/">
        <img src={IconArrowBack} />
      </Link>
      <iframe className="youtube-player" src={videoSource} allow="fullscreen" />
    </div>
  );
}
