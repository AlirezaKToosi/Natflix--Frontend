// Fake data
import Media from "./fake-data/media.json";
import Users from "./fake-data/users.json";
import Documentaries from "./fake-data/documentaries.json";
import Movies from "./fake-data/movies.json";
import Series from "./fake-data/tv-series.json";
import SingleDocumentary from "./fake-data/single-documentary.json";
import SingleMovie from "./fake-data/single-movie.json";
import SingleSerie from "./fake-data/single-tv-series.json";

// Project files
import eMediaType from "types/eMediaType";
import iMedia from "types/iMedia";
import iDetailsOther from "types/iDetailsOther";
import iTVSeries from "types/iTVSeries";
import eUserType from "types/eUserType";

export default function fakeServer(endPoint: string, data: any = null): any {
  switch (endPoint) {
    // Media
    case "media/":
      return Media;
    case "media/create/":
      return mediaCreate(data);
    case "media/delete/":
      return mediaDelete(data);
    case "media/update/":
      return mediaUpdate(data);

    // Auth
    case "login/":
      return authLogin(data);
    case "register/":
      return authRegister(data);

    // Media filtered
    case "media/tv-series/":
      return Series;
    case "media/movies/":
      return Movies;
    case "media/documentaries/":
      return Documentaries;

    // Movies
    case "movies/:id/":
      return detailsOther(data);
    case "movies/:id/update/":
      return detailsOtherUpdate(data);

    // Documentaries
    case "documentaries/:id/":
      return detailsOther(data);
    case "documentaries/:id/update/":
      return detailsOtherUpdate(data);

    // TV Series
    case "tv-series/:id/":
      return detailsSeries(data);
    case "tv-series/:id/create/":
      return detailsSeriesCreate(data);
    case "tv-series/:id/update/":
      return detailsSeriesUpdate(data);
    case "tv-series/:id/delete/":
      return detailsSeriesDelete(data);

    // Exception
    default:
      throw new Error(`invalid endpoint ${endPoint}`);
  }
}

// Media
function mediaCreate(item: iMedia): string {
  return `Created new media ${item.title}`;
}

// Auth
function authLogin(data: any) {
  const { email, password } = data;

  const admin = Users[0];
  const customer = Users[1];

  if (email === admin.email && password === admin.password) {
    return admin;
  }

  if (email === customer.email && password === customer.password) {
    return customer;
  }

  throw new Error("Invalid credentials");
}

/**
 * Notes to the students
 * Here you check that the email does not exist on the server.
 * If so, you return an error message telling this.
 *
 * Otherwise you create a customer user by adding the type = 2.
 *
 * Note: Admin users are created only inside the database, not from this website.
 */
function authRegister(data: any) {
  const { email } = data;

  const chanceToSucced = generateRandomNumber(5);

  // Existing email account
  if (chanceToSucced == 1) {
    return `The user ${email} already exist on our database. Do you want to login instead?`;
  }

  // Manage to create a new user
  data.type = eUserType.CUSTOMER; // to convert this user into a customer

  return data;
}

// Content
function mediaUpdate(item: iMedia): string {
  return `Updated media ${item.title}`;
}

function mediaDelete(id: number): string {
  return `Deleted media with id ${id}`;
}

// Details other
function detailsOther(id: number): iDetailsOther {
  const media = Media.filter((item) => item.id === Number(id))[0];

  switch (media.media_type_id) {
    case eMediaType.MOVIES:
      return SingleMovie;
    case eMediaType.DOCUMENTARIES:
      return SingleDocumentary;
    default:
      throw new Error(`Invalid type id ${id}`);
  }
}

function detailsOtherUpdate(item: iDetailsOther): string {
  return `Update media details id ${item.id}`;
}

// Details tv-series
function detailsSeries(id: number): iTVSeries[] {
  const media = Media.filter((item) => item.id === Number(id))[0];

  switch (media.media_type_id) {
    case eMediaType.SERIES:
      return SingleSerie;
    default:
      throw new Error(`Invalid type id ${id}`);
  }
}

function detailsSeriesCreate(item: iTVSeries) {
  return `Created new episode ${item.title}`;
}

function detailsSeriesUpdate(item: iTVSeries) {
  return `Update episode ${item.title}`;
}

function detailsSeriesDelete(id: number) {
  return `Deleted episode with id ${id}`;
}

function generateRandomNumber(limit: number) {
  return Math.floor(Math.random() * limit);
}
