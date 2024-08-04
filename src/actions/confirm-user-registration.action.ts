"use server";

export default async function confirmUserRegistration(formData: FormData) {
  const token = formData.get("token");

  try {
    await fetch(`http://localhost:3333/auth/confirm?token=${token}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
