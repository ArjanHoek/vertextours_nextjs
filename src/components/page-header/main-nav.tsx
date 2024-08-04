import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="">
      <ul className="flex gap-6 font-light">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
