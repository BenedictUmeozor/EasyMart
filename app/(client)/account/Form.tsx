import { getAuth } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/types/types";

const getUser = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/user/${id}`);

  return res.json();
};

export default async function Form() {
  const session = await getAuth();
  const { user }: { user: User } = await getUser((session?.user as any).id);

  return (
    <div>
      <form className="w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="Name"
              defaultValue={user.name}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="example@gmail.com"
              defaultValue={user.email}
            />
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1">
            <label htmlFor="phone" className="block mb-1">
              Phone Numner
            </label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="08123346754"
              defaultValue={user.phoneNumber ? user.phoneNumber : ""}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="4, Example Street"
              defaultValue={user.address ? user.address : ""}
            />
          </div>
        </div>
        <div className="mb-8">
          <p className="mb-4">Password Changes</p>
          <div className="mb-4">
            <input
              type="password"
              name="current_password"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="Current Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="New Password"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirm_password"
              className="bg-[#f5f5f5] rounded p-2 h-12 w-full"
              placeholder="Confirm New Password"
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center w-[45%] gap-4">
            <button className="flex-1">Cancel</button>
            <button className="bg-crimson text-white text-[0.9rem] py-2 rounded flex-[2]">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
