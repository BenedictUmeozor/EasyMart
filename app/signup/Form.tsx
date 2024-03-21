"use client";

import Google from "@/assets/icons/Google";
import Link from "next/link";

import { getProviders, ClientSafeProvider, signIn } from "next-auth/react";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Spinner from "@/components/Spinner";

export default function Form() {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password || !name) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);
      setError("");
      const resUserExists = await fetch("api/auth/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists");
        return;
      }

      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setName("");
        setPassword("");
        setEmail("");

        const login = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (login?.error) {
          setError("failed to login");
          return;
        }

        router.push("/account");
        return toast.success("Your account has been created!");
      } else {
        setError("Registration failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <form className="block" onSubmit={onSubmit}>
        <div className="mb-8">
          <input
            type="text"
            className="pb-2 border-b-2 border-b-[#ccc] w-full focus:border-b-crimson text-[0.9rem]"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          {loading ? <Spinner /> : "Create an account"}
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
        Already have an account?{" "}
        <Link href="/signin" className="text-[#333] underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
