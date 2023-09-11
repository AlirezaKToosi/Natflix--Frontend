// Project files
import ItemCard from "components/ItemCard";
import iMedia from "types/iMedia";

interface iProps {
  title: String;
  data: iMedia[];
}

export default function ListCards({ title, data }: iProps) {
  // Components
  const Cards = data.map((item) => <ItemCard key={item.id} item={item} />);

  return (
    <section className="list-cards">
      <h2>{title}</h2>
      <div className="scroller">
        <div className="container">{Cards}</div>
      </div>
    </section>
  );
}
