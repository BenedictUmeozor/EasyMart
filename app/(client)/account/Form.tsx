"use client";

import { User } from "@/types/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SkeletonForm from "./Skeleton";
import SubmitButton from "@/components/SubmitButton";
import { useFormState } from "react-dom";
import { updateUser } from "@/utils/actions";

const initialState: { error: string; success: string } = {
  error: "",
  success: "",
};

export default function Form() {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);

  const [state, formAction] = useFormState(updateUser, initialState);

  const getUser = async (id: string) => {
    const res = await fetch(`/api/user/${id}`, {
      cache: "no-store",
    });

    return res.json();
  };

  useEffect(() => {
    if (session && session.user && user === null) {
      (async () => {
        const { user }: { user: User } = await getUser(
          (session?.user as any).id
        );
        setUser(user);
      })();
    }
  }, [session, user]);

  useEffect(() => {
    if (state.success) {
      (async () => {
        const { user }: { user: User } = await getUser(
          (session?.user as any).id
        );
        setUser(user);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, state.success]);

  return (
    <>
      {!user && <SkeletonForm />}
      {user && (
        <div>
          <p className="mb-4 text-xs text-crimson">{state?.error}</p>
          <p className="mb-4 text-xs text-success">{state?.success}</p>
          <form action={formAction} className="w-full">
            <div className="flex max-md:flex-col items-center gap-4 mb-8">
              <div className="flex-1 max-md:w-full">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-[#f5f5f5] rounded p-2 h-12 w-full text-[0.9rem]"
                  placeholder="Name"
                  defaultValue={user.name}
                  required
                />
              </div>
              <div className="flex-1 max-md:w-full">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-[#f5f5f5] rounded p-2 h-12 w-full text-[0.9rem] disabled:opacity-70 disabled:cursor-not-allowed"
                  placeholder="example@gmail.com"
                  defaultValue={user.email}
                  disabled
                />
              </div>
            </div>
            <div className="flex max-md:flex-col items-center gap-4 mb-8">
              <div className="flex-1 max-md:w-full">
                <label htmlFor="phone" className="block mb-1">
                  Phone Numner
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phoneNumber"
                  className="bg-[#f5f5f5] rounded p-2 h-12 w-full text-[0.9rem]"
                  placeholder="08123346754"
                  defaultValue={user.phoneNumber ? user.phoneNumber : ""}
                  required
                />
              </div>
              <div className="flex-1 max-md:w-full">
                <label htmlFor="address" className="block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="bg-[#f5f5f5] rounded p-2 h-12 w-full text-[0.9rem]"
                  placeholder="4, Example Street"
                  defaultValue={user.address ? user.address : ""}
                  required
                />
              </div>
            </div>
            <div className="mb-8">
              <p className="mb-4">Password Changes</p>
              <div className="mb-4">
                <input
                  type="password"
                  name="current_password"
                  className="bg-[#f5f5f5] rounded p-2 h-12 w-full text-[0.9rem]"
                  placeholder="Current Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="new_password"
                  className="bg-[#f5f5f5] rounded p-2 h-12 w-full text-[0.9rem]"
                  placeholder="New Password"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="confirm_password"
                  className="bg-[#f5f5f5] rounded p-2 h-12 w-full text-[0.9rem]"
                  placeholder="Confirm New Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-center w-full md:w-[25%] gap-4">
                <SubmitButton
                  text="Save changes"
                  className="bg-crimson hover:scale-100 button-hover text-white text-[0.9rem] py-2 rounded flex-[2]"
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
