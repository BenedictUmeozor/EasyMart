"use server";

import { getAuth } from "@/config/auth";

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

export async function updateUser(prevState: any, formData: FormData) {
  try {
    const session = await getAuth();

    if (!session) {
      throw new Error("You need to be authenticated");
    }

    const name = formData.get("name");
    const phoneNumber = formData.get("phoneNumber");
    const address = formData.get("address");
    const current_password = formData.get("current_password");
    const new_password = formData.get("new_password");
    const confirm_password = formData.get("confirm_password");

    if (!name || !phoneNumber || !address) {
      throw new Error("All fields are required");
    }

    if (current_password) {
      if (!new_password || !confirm_password) {
        throw new Error("All password fields are required to change password");
      }

      if (new_password !== confirm_password) {
        throw new Error("Passwords do not match");
      }
    }

    let rawFormData: any;

    rawFormData = { name, phoneNumber, address };

    if (current_password) {
      rawFormData = {
        name,
        phoneNumber,
        address,
        current_password,
        new_password,
      };
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${
        (session.user as any).id
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
      }
    );

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return {
      error: "",
      success: "Profile updated successfuly",
    };
  } catch (error) {
    return {
      error: (error as Error).message,
      success: "",
    };
  }
}

export async function getProduct(product_id: string) {
  const product = await fetch(`https://dummyjson.com/products/${product_id}`, {
    cache: "no-store",
  });
  return product.json();
}

export async function getUser(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`);
  return res.json();
}
