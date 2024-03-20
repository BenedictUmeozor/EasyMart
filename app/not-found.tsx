import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container className="flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl mb-8">404 Page Not Found</h2>
          <p className="mb-16">You visited page not found. You may go to homepage</p>
          <Link href="/" className="bg-crimson px-6 py-2 text-[0.9rem] text-white rounded hover:scale-95">Back to home page</Link>
        </div>
      </Container>
    </div>
  );
}
