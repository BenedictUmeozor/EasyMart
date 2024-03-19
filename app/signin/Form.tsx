import Google from "@/assets/icons/Google";
import Link from "next/link";

export default function Form() {
  return (
    <div>
      <form className="block">
        <div className="mb-8">
          <input
            type="email"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Email"
          />
        </div>
        <div className="mb-8">
          <input
            type="password"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Password"
          />
        </div>
        <button className="h-14 rounded text-center bg-crimson text-white w-full hover:scale-95">
          Log in
        </button>
        <button className="h-14 border mt-4 border-[#ccc] rounded text-center bg-transparent w-full flex items-center justify-center gap-2 hover:scale-95">
          <Google className="w-8" />
          Sign in with Google
        </button>
      </form>
      <p className="text-center text-[0.9rem] mt-4 text-[#777]">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#333] underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
