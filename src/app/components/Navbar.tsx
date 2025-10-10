"use client";

import Link from "next/link";
import { useState } from "react";

type MobileNavItemProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

function MobileNavItem({ children, href = "", className = "" }: MobileNavItemProps) {
  const baseClass = "hover:text-blue-400 uppercase transition";
  const combinedClass = `${baseClass} ${className}`;
  return <li className={combinedClass}>{href ? <Link href={href}>{children}</Link> : children}</li>;
}

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
        <MobileNavItem href="/"> Home</MobileNavItem>
        <MobileNavItem href="/about">About</MobileNavItem>
        <MobileNavItem href="/contact">Contact</MobileNavItem>
        <MobileNavItem className="md:hidden" href="/new-post">
          Add new post
        </MobileNavItem>
      </ul>
    </nav>
  );
}
