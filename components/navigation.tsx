"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="text-sm font-bold flex items-center gap-5 my-4">
      <Link
        href="/"
        className={`relative cursor-pointer transition-colors duration-200 ease-in-out ${
          pathname === "/"
            ? "text-primary-foreground"
            : "text-gray-500 hover:text-primary-foreground"
        }`}
      >
        Products
      </Link>
      <Link
        href="/stack"
        className={`flex items-center gap-2 transition-colors duration-200 ease-in-out ${
          pathname === "/stack"
            ? "text-primary-foreground"
            : "text-gray-500 hover:text-primary-foreground"
        }`}
      >
        Stack
      </Link>
    </div>
  );
}
