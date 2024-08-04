import Link from "next/link";
import MainNav from "./main-nav";
import Container from "../container";

export default function PageHeader() {
  return (
    <header className="bg-green-950 text-white h-16 flex items-center fixed w-full top-0">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            scroll={false}
            className="text-white font-bold text-xl"
            href="/"
          >
            Vertex Tours
          </Link>
          <MainNav />
        </div>
      </Container>
    </header>
  );
}
