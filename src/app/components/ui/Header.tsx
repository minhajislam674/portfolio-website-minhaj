"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary-900 hover:text-secondary transition-colors"
        >
          MI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-secondary ${
                  isActive ? "border-b-2 border-secondary pb-1" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-sm">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors hover:text-secondary text-black ${
                    isActive ? "border-b-2 border-secondary pb-1" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
