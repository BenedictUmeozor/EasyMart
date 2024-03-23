import Container from "@/components/Container";
import { ReactNode } from "react";
import Links from "./components/Links";

export default function AccountLayout({ children }: { children: ReactNode }) {
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
