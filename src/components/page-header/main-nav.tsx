import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="">
      <ul className="flex gap-6 font-light">
        <li>
          <Link scroll={false} href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
