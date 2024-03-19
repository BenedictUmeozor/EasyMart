import SingleCategory from "./SingleCategory";
import { categories } from "./data";

export default function Category() {
  return (
    <section className="py-12">
      {categories.map((category) => (
        <SingleCategory key={category} title={category} />
      ))}
    </section>
  );
}
