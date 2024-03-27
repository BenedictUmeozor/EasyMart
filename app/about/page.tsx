import Container from "@/components/Container";
import Image from "next/image";
import image from "@/assets/about.png";
import Services from "./Services";

export default function About() {
  return (
    <div className="py-4 md:selection:py-12">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12 max-md:text-center">
          <div>
            <h2 className="text-2xl md:text-4xl mb-6 font-semibold">Our Story</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              labore beatae fugit quia ut possimus alias, culpa minima esse
              eligendi quasi reprehenderit architecto, molestias explicabo
              perferendis quidem nobis nemo porro accusamus? Animi voluptas
              laboriosam neque eaque veritatis temporibus sed consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odit
              ut voluptatem nihil cupiditate porro. Quam iste nesciunt dolorum
              corporis.
            </p>
          </div>

          <Image
            src={image}
            alt="image"
            height={500}
            width={500}
            className="w-[100%]"
          />
        </div>
        <Services />
      </Container>
    </div>
  );
}
