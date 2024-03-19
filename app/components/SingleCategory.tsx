import Container from "@/components/Container";
import Title from "./Title";
import Products from "./Products";

type Props = {
  title: string;
};
export default function SingleCategory({ title }: Props) {
  return (
    <div className="mb-12">
      <Container>
        <Title title={title} />
        <div className="mt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="tracking-wide text-2xl capitalize">Explore {title}</h2>
            <button className=" bg-crimson text-white py-2 px-4 rounded text-[0.9rem]">
              View All
            </button>
          </div>
          <Products />
        </div>
      </Container>
    </div>
  );
}
