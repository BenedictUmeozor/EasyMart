import Container from "@/components/Container";
import image from "@/assets/cartimage.png";
import Image from "next/image";
import Form from "./Form";
import { redirect } from "next/navigation";
import { getAuth } from "@/config/auth";

export default async function SignUp() {
  const session = await getAuth();

  if (session) {
    redirect("/account");
  }

  return (
    <section className="py-12">
      <Container className="md:grid grid-cols-2 items-center gap-4">
        <div className="hidden md:flex items-center justify-center bg-[#CBE4E8] py-8">
          <Image
            src={image}
            alt="Image"
            height={200}
            width={500}
            className="max-w-full w-[50%]"
          />
        </div>
        <div>
          <div className="w-[80%] mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Login to EasyMart</h2>
            <p className="mb-8">Enter your details below</p>
            <Form />
          </div>
        </div>
      </Container>
    </section>
  );
}
