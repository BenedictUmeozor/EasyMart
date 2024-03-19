import Container from "@/components/Container";
import { DollarSign, Gift, Home } from "react-feather";
import Service from "./Service";
import { CurrencyDollarIcon } from "@heroicons/react/16/solid";

export default function Services() {
  return (
    <section className="pt-4 pb-16">
      <Container className="grid grid-cols-4 gap-4">
        <Service largeText="10.5k" smallText="sellers active in our site">
          <Home className="w-8 text-white" />
        </Service>
        <Service largeText="33k" smallText="Monthly product sales">
          <DollarSign className="w-8 text-white" />
        </Service>
        <Service largeText="45.5k" smallText="Customers active in our site">
          <Gift className="w-8 text-white" />
        </Service>
        <Service largeText="25k" smallText="Annual gross sales">
          <CurrencyDollarIcon className="w-8 text-white" />
        </Service>
      </Container>
    </section>
  );
}
