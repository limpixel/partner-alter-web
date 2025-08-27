"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-5 ${
        stickyMenu
          ? "bg-white py-4 shadow-sm transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Centered container */}
        <div className="flex items-center justify-center gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Logo for Light Mode */}
            <Image
              src="/images/logo/logo-light-v2.svg"
              alt="logo"
              width={40}
              height={56}
              className="block dark:hidden w-10 h-14"
            />
            {/* Logo for Dark Mode */}
            <Image
              src="/images/logo/logo-dark-v2.svg"
              alt="logo"
              width={40}
              height={56}
              className="hidden dark:block w-10 h-14"
            />
            {/* Text */}
            <h3 className="text-black text-2xl font-bold block dark:hidden">
              Partner Alter
            </h3>
            <h3 className="text-white text-2xl font-bold hidden dark:block">
              Partner Alter
            </h3>
          </Link>

          {/* Theme Toggler */}
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
