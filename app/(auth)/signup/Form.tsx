"use client";

import Google from "@/assets/icons/Google";
import Link from "next/link";

import { getProviders, ClientSafeProvider, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/utils/actions";
import { useFormState } from "react-dom";
import { loginUser } from "@/utils/functions";
import SubmitButton from "@/components/SubmitButton";

const initialState: { message: string; success: string; details: any } = {
  message: "",
  success: "",
  details: {},
};

export default function Form() {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  const [state, formAction] = useFormState(createUser, initialState);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (state?.success) {
        const login = await loginUser(state?.details);
        if (login) {
          router.push("/account");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, state?.success, state?.details]);

  return (
    <div>
      <p className="mb-4 text-xs text-crimson">{state?.message}</p>
      <p className="mb-4 text-xs text-success">{state?.success}</p>
      <form action={formAction} className="block">
        <div className="mb-8">
          <input
            type="text"
            name="name"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Name"
          />
        </div>
        <div className="mb-8">
          <input
            type="email"
            name="email"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Email"
          />
        </div>
        <div className="mb-8">
          <input
            type="password"
            name="password"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Password"
          />
        </div>
        <SubmitButton
          text="Create an account"
          className="h-14 rounded text-center bg-crimson text-white w-full hover:scale-95"
        />
      </form>
      {providers?.google && (
        <button
          className="h-14 border mt-4 border-[#ccc] rounded text-center bg-transparent w-full flex items-center justify-center gap-2 hover:scale-95"
          onClick={() => signIn("google")}
        >
          <Google className="w-8" />
          Sign up with Google
        </button>
      )}
      <p className="text-center text-[0.9rem] mt-4 text-[#777]">
        Already have an account?{" "}
        <Link href="/signin" className="text-[#333] underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
