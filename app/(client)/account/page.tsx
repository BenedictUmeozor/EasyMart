import Form from "./Form";
import { getAuth } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Account() {
  const session = await getAuth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <h2 className="text-xl text-crimson mb-8">Edit your Profile</h2>
      <Form />
    </div>
  );
}
