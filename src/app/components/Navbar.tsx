"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-2 bg-gray-900 text-white dark:bg-black">
      {/* hamburger menu */}
      <div className="md:hidden py-2 flex justify-end">
        {/* <div className="text-lg font-bold">Logo</div> */}
        <button onClick={() => setIsOpen(!isOpen)}>☰ </button>
      </div>
      {/* full menu */}
      <ul
        className={`py-2 ${
          isOpen ? "flex flex-col items-end" : "hidden"
        } md:flex md:flex-row md:items-center md:justify-around`}
      >
        <li>
          <Link href="/" className="hover:text-blue-400 uppercase transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-400 uppercase transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400 uppercase transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
