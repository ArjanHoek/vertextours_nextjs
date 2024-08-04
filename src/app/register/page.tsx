"use client";

import confirmUserRegistration from "@/actions/confirm-user-registration.action";
import registerUserAction from "@/actions/register-user.action";
import Container from "@/components/container";
import FormInput from "@/components/form/form-input/form-input";
import PageContent from "@/components/page-content/page-content";
import PageHeader from "@/components/page-header/page-header";
import { useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const content = token ? (
    <>
      <h1>Confirm registration</h1>
      <form action={confirmUserRegistration}>
        <input value={token} name="token" readOnly hidden />
        <button type="submit">Confirm</button>
      </form>
    </>
  ) : (
    <>
      <h1>Create an account</h1>
      <p>Please fill out this form in order to create an account.</p>
      <form
        className="flex flex-col gap-4 w-1/2 mt-6"
        action={registerUserAction}
      >
        <FormInput label="Email" type="email" name="email" />
        <FormInput label="Password" type="password" name="password" />
        <button type="submit">Create account</button>
      </form>
    </>
  );

  return (
    <>
      <PageHeader />
      <PageContent>
        <Container>{content}</Container>
      </PageContent>
    </>
  );
}
