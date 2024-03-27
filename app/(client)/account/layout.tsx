import Container from "@/components/Container";
import { ReactNode } from "react";
import Links from "./components/Links";
import { redirect } from "next/navigation";
import { getAuth } from "@/config/auth";

export default async function AccountLayout({ children }: { children: ReactNode }) {
  const session = await getAuth();

  if (!session?.user) {
    redirect("/signin");
  }
  return (
    <div className="py-12">
      <Container className="md:grid grid-cols-4 gap-8">
        <div className="col-span-1 max-md:mb-8">
          <p className="md:text-center font-bold mb-4">Manage My account</p>
          <Links />
        </div>
        <div className="col-span-3 shadow py-6 max-md:px-4 md:p-6 rounded">{children}</div>
      </Container>
    </div>
  );
}
