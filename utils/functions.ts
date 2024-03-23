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

export function arraysAreEqual<T>(arr1: T[], arr2: T[]): boolean {
  // Check if the lengths are different
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate over the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Check if the elements at the same index are not equal
    if (!isEqual(arr1[i], arr2[i])) {
      return false;
    }
  }

  // All elements are equal
  return true;
}

// Helper function to compare objects
function isEqual(obj1: any, obj2: any): boolean {
  // Check if both are objects
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is different
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Iterate over the keys
    for (const key of keys1) {
      // Check if the values for the current key are not equal
      if (!isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    // All values are equal
    return true;
  }

  // If they are not objects, compare their values
  return obj1 === obj2;
}
