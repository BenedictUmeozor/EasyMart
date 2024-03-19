import Container from "@/components/Container";
import { CheckCircle, Headphones, Truck } from "react-feather";
import Service from "./Service";

export default function Services() {
  return (
    <section className="pt-4 pb-16">
      <Container className="grid grid-cols-3 gap-4">
        <Service
          largeText="free and fast delivery"
          smallText="Free delivery for all orders above $140"
        >
          <Truck className="w-8 text-white" />
        </Service>
        <Service
          largeText="24/7 customer service"
          smallText="Friendly 24/7 customer support"
        >
          <Headphones className="w-8 text-white" />
        </Service>
        <Service
          largeText="money back guarantee"
          smallText="We return money within 30 days"
        >
          <CheckCircle className="w-8 text-white" />
        </Service>
      </Container>
    </section>
  );
}
