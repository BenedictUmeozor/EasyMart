import Google from "@/assets/icons/Google";
import Link from "next/link";

export default function Form() {
  return (
    <div>
      <form className="block">
        <div className="mb-8">
          <input
            type="text"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Name"
          />
        </div>
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
          Create an account
        </button>
        <button className="h-14 border mt-4 border-[#ccc] rounded text-center bg-transparent w-full flex items-center justify-center gap-2 hover:scale-95">
          <Google className="w-8" />
          Sign up with Google
        </button>
      </form>
      <p className="text-center text-[0.9rem] mt-4 text-[#777]">
        Already have an account? <Link href="/signin" className="text-[#333] underline">Log in</Link>
      </p>
    </div>
  );
}
