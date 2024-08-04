import Container from "@/components/container";
import PageContent from "@/components/page-content/page-content";
import PageHeader from "@/components/page-header/page-header";
import { PropsWithChildren } from "react";

function Label({ children }: PropsWithChildren) {
  return <label className="flex flex-col">{children}</label>;
}

export default function RegisterPage() {
  return (
    <>
      <PageHeader />
      <PageContent>
        <Container>
          <h1>Create an account</h1>
          <form className="flex flex-col gap-4">
            <Label>
              <span>Email:</span>
              <input type="text" placeholder="Enter your email address" />
            </Label>
            <Label>
              <span>Password:</span>
              <input type="password" placeholder="Enter a password" />
            </Label>
          </form>
        </Container>
      </PageContent>
    </>
  );
}
