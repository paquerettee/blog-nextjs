import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center px-6 py-4 bg-gray-900 text-white dark:bg-black">
      <Link href="/" className="hover:text-blue-400 uppercase transition">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-400 uppercase transition">
        About
      </Link>
      <Link href="/contact" className="hover:text-blue-400 uppercase transition">
        Contact
      </Link>
    </nav>
  );
}
