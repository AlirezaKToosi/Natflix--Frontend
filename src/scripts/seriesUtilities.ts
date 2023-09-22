// Project files
import iDetailsSeries from "interfaces/iDetailsSeries";

export default class SeriesUtilities {
  public static getSeasonsNumber(episodes: iDetailsSeries[]): number {
    const seasonsAvailable = episodes.map((item) => item.season_number);
    const seasonsSorted = seasonsAvailable.sort((a, b) => b - a);
    const result: number = seasonsSorted[0]; // take the highest number

    return result;
  }

  public static getEpisodes(episodes: iDetailsSeries[], season: number) {
    return episodes.filter((item) => item.season_number === Number(season));
  }

  public static getSeasonLabels(numberOfSeasons: number) {
    let result: string[] = [];

    for (let index = 0; index < numberOfSeasons; index++) {
      result.push(`Season ${index + 1}`);
    }

    return result;
  }
}
