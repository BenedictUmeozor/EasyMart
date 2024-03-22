"use server";

export async function createUser(prevState: any, formData: FormData) {
  const rawFomData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { name, email, password } = rawFomData;

  if (!name || !email || !password) {
    return {
      message: "All fields are required",
      success: "",
      details: false,
    };
  }

  try {
    const userExist = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/userExists`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!userExist) {
      throw new Error("Something went wrong");
    }

    const { user } = await userExist.json();

    if (user) {
      throw new Error("User already exists");
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFomData),
      }
    );

    if (!res.ok) {
      throw new Error("An error occurred");
    }

    return {
      message: "",
      success: "You have been successfully registered and signed in shortly",
      details: { email, password },
    };
  } catch (error) {
    return {
      message: (error as Error).message,
      success: "",
      details: false,
    };
  }
}
