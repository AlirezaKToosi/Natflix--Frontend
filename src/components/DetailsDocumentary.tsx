export default function DetailsDocumentary({ details }: any) {
  const { narrator } = details;

  return (
    <div className="row">
      <span>
        <b>Narrator:</b> {narrator}
      </span>
    </div>
  );
}
