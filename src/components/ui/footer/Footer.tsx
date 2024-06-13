import { titleFont } from "@/config/font";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center text-sm mt-10 py-8">
      <Link href="/home">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo {" "}
        </span>
        <span>| Shop</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad y términos
      </Link>

      <Link href="/" className="mx-3">
        Ubicanos
      </Link>
    </footer>
  );
};
