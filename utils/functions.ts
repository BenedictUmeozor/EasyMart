import { signIn } from "next-auth/react";

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      throw new Error("Invalid credentials");
    }

    return { message: "Login successful" };
  } catch (error) {
    return {
      error: (error as Error).message,
    };
  }
};

export function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}
