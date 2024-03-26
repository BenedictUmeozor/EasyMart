import Container from "@/components/Container";
import { ReactNode } from "react";
import Links from "./components/Links";
import { getAuth } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AccountLayout({ children }: { children: ReactNode }) {
  const session = await getAuth();

  if (!session?.user) {
    redirect("/signin");
  }
  return (
    <div className="py-12">
      <Container className="grid grid-cols-4 gap-8">
        <div className="col-span-1">
          <p className="text-center font-bold mb-4">Manage My account</p>
          <Links />
        </div>
        <div className="col-span-3 shadow p-6 rounded">{children}</div>
      </Container>
    </div>
  );
}
