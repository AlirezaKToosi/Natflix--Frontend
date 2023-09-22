/**
 * About:
 * The additional details a series need to its seasons and episodes in the content modal.
 *
 * Note: season_number and episode_number seen redundant but is to be clear that is just the number and not the whole data
 */
export default interface iDetailsSeries {
  id: number;
  content_id: number;
  season_number: number;
  episode_number: number;
  title: string;
  summary: string;
  thumbnail_url: string;
  video_code: string;
}
