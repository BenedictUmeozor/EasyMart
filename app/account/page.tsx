import Container from "@/components/Container";
import Form from "./Form";
import SkeletonForm from "./Skeleton";

export default function Account() {
  return (
    <div className="py-12">
      <Container className="grid grid-cols-4 gap-8">
        <div className="col-span-1">
          <p className="text-center">
            Welcome <span className="text-crimson">Benedict!</span>
          </p>
        </div>
        <div className="col-span-3 shadow p-6 rounded">
          <h2 className="text-xl text-crimson mb-8">Edit your Profile</h2>
          <Form />
          {/* <SkeletonForm /> */}
        </div>
      </Container>
    </div>
  );
}
