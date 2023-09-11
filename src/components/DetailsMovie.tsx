export default function DetailsMovie({ details }: any) {
  const { director, rating } = details;

  // Properties
  const freshness = rating >= 75 ? <>🍅 fresh</> : <>🦠 rotten</>;

  return (
    <div className="row">
      <span>
        <b>Director:</b> {director}
      </span>
      <span>
        <b>Rotten Tomatoes Score:</b> {freshness} ({rating}%)
      </span>
    </div>
  );
}
