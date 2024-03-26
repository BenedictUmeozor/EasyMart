import Container from "@/components/Container";
import image from "@/assets/red-x-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { getAuth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getAuth();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <section className="h-full flex items-center justify-center py-16 text-center">
      <Container>
        <div className="py-10 px-8 rounded bg-gray-200">
          <div className="flex items-center justify-center">
            <Image
              src={image}
              alt="Image"
              height={100}
              width={100}
              className="w-16"
            />
          </div>
          <h2 className="text-2xl mt-4 font-bold">You cancelled your order</h2>
          <p className="mt-2 mb-4">Check your email for the confirmation</p>

          <p className="mb-6">
            If you have any questions, please email{" "}
            <a className="text-crimson" href="mailto:easymart@example.com">
              easymart@example.com
            </a>
          </p>

          <Link
            href="/products"
            className="py-2 px-6 rounded bg-crimson text-white button-hover"
          >
            Continue Shopping
          </Link>
        </div>
      </Container>
    </section>
  );
}
