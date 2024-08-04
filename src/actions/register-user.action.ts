"use server";

export default async function registerUserAction(formData: FormData) {
  const { email, password } = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    await fetch("http://localhost:3333/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  } catch (error) {
    console.log(error);
  }
}
