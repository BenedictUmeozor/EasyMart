import Container from "@/components/Container";
import { Mail, Phone } from "react-feather";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="py-4 md:py-12">
      <Container className="md:grid grid-cols-4 gap-8">
        <div className="col-span-1 rounded shadow p-4 max-md:text-center">
          <div className="pb-6 border-b border-b-[#ddd]">
            <header className="flex items-center gap-4 mb-4 max-md:justify-center">
              <div className="h-7 w-7 rounded-[50%] bg-crimson flex items-center justify-center">
                <Phone className="w-4 text-white" />
              </div>
              <p>Call to us</p>
            </header>
            <p className="mb-4">We are available 24/7</p>
            <p>Phone: +234 810 821 8964</p>
          </div>
          <div className="pb-6 border-b border-b-[#ddd]">
            <header className="flex items-center gap-4 mb-4 max-md:justify-center">
              <div className="h-7 w-7 rounded-[50%] bg-crimson flex items-center justify-center">
                <Mail className="w-4 text-white" />
              </div>
              <p>Write to us</p>
            </header>
            <p className="mb-4">
              Fill out our form and we will contact you within 24 hours
            </p>
            <p>Email: support@easymart.com</p>
          </div>
        </div>
        <div className="col-span-3 rounded shadow p-4">
          <Form />
        </div>
      </Container>
    </div>
  );
}
