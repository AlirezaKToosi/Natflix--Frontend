/**
 * About:
 * This method is fake replacement for the real fetch method in JavaScript.
 */

// Project files
import fakeServer from "scripts/fakeServer";

interface iResponse {
  status: string;
  data: Array<any> | any;
}

async function fakeFetch(url: string, data: any = null): Promise<iResponse> {
  const chanceToSucced = generateRandomNumber(100);
  const result = { data: {}, status: "" };

  await delayInSeconds(1);

  switch (chanceToSucced) {
    case 0:
      result.status = "error";
      break;
    case 1:
      result.data = []; // if worked but there is no data
      result.status = "ok";
      break;
    default:
      result.data = fakeServer(url, data);
      result.status = "ok";
  }

  return result;
}

export default fakeFetch;

function delayInSeconds(seconds: number): Promise<any> {
  const miliseconds = 1000;

  return new Promise((resolve) => setTimeout(resolve, seconds * miliseconds));
}

function generateRandomNumber(limit: number) {
  return Math.floor(Math.random() * limit);
}
