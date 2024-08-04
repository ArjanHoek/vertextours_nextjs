import { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
};

export default function PageContent({ children }: PageContentProps) {
  return <main className="pt-4 mt-16">{children}</main>;
}
