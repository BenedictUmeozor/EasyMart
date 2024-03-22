"use client";

import Google from "@/assets/icons/Google";
import Spinner from "@/components/Spinner";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Form() {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    try {
      setError("");
      setLoading(true);
      const login = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
      });

      if (login?.error) {
        toast.error("An error occurred");
      }

      return toast.success("You are logged in");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div>
      <form className="block" onSubmit={onSubmit}>
        <div className="mb-8">
          <input
            type="email"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <input
            type="password"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          disabled={loading}
          className="h-14 rounded text-center bg-crimson text-white w-full hover:scale-95"
        >
          {loading ? <Spinner /> : "Log in"}
        </button>
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
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#333] underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
