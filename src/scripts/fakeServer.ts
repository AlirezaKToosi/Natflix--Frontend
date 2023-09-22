// Fake data
import Users from "./fake-data/users.json";
import Content from "./fake-data/content.json";
import Documentaries from "./fake-data/documentaries.json";
import Movies from "./fake-data/movies.json";
import Series from "./fake-data/series.json";
import SingleDocumentary from "./fake-data/singleDocumentary.json";
import SingleMovie from "./fake-data/singleMovie.json";
import SingleSerie from "./fake-data/singleSerie.json";

// Project files
import eContentType from "interfaces/eContentType";
import iContent from "interfaces/iContent";
import iDetailsOther from "interfaces/iDetailsOther";
import iDetailsSeries from "interfaces/iDetailsSeries";
import eUserType from "interfaces/eUserType";

export default function fakeServer(endPoint: string, data: any = null): any {
  switch (endPoint) {
    // Auth
    case "login/":
      return authLogin(data);
    case "register/":
      return authRegister(data);

    // Content
    case "content/":
      return Content;
    case "content/create/":
      return contentCreate(data);
    case "content/delete/":
      return contentDelete(data);
    case "content/update/":
      return contentUpdate(data);

    // Content filtered
    case "content/series/":
      return Series;
    case "content/movies/":
      return Movies;
    case "content/documentaries/":
      return Documentaries;

    // Details others
    case "details-other/:id/":
      return detailsOther(data);
    case "details-other/:id/update/":
      return detailsOtherUpdate(data);

    // Details series
    case "details-series/:id/":
      return detailsSeries(data);
    case "details-series/:id/create/":
      return detailsSeriesCreate(data);
    case "details-series/:id/update/":
      return detailsSeriesUpdate(data);
    case "details-series/:id/delete/":
      return detailsSeriesDelete(data);

    // Exception
    default:
      throw new Error(`invalid endpoint ${endPoint}`);
  }
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
function contentCreate(item: iContent): string {
  return `Created new content ${item.title}`;
}

function contentUpdate(item: iContent): string {
  return `Updated content ${item.title}`;
}

function contentDelete(id: number): string {
  return `Deleted content with id ${id}`;
}

// Details other
function detailsOther(id: number): iDetailsOther {
  const content = Content.filter((item) => item.id === Number(id))[0];

  switch (content.type_id) {
    case eContentType.MOVIES:
      return SingleMovie;
    case eContentType.DOCUMENTARIES:
      return SingleDocumentary;
    default:
      throw new Error(`Invalid type id ${id}`);
  }
}

function detailsOtherUpdate(item: iDetailsOther): string {
  return `Update content details id ${item.id}`;
}

// Details series
function detailsSeries(id: number): iDetailsSeries[] {
  const content = Content.filter((item) => item.id === Number(id))[0];

  switch (content.type_id) {
    case eContentType.SERIES:
      return SingleSerie;
    default:
      throw new Error(`Invalid type id ${id}`);
  }
}

function detailsSeriesCreate(item: iDetailsSeries) {
  return `Created new episode ${item.title}`;
}

function detailsSeriesUpdate(item: iDetailsSeries) {
  return `Update episode ${item.title}`;
}

function detailsSeriesDelete(id: number) {
  return `Deleted episode with id ${id}`;
}

function generateRandomNumber(limit: number) {
  return Math.floor(Math.random() * limit);
}
