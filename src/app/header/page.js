"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import UserImg from "../../assets/images/avatar-icon.png";
import Menu from "../../assets/images/menu-icon.svg";
import Close from "../../assets/images/close-icon.svg";
import SideMenu from "../../../components/sideMenu"; // Adjust the import path

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const el = logoRef.current;

    gsap.fromTo(
      el,
      {
        y: -100, // Start from above the viewport
        opacity: 0,
        scale: 0.5, // Start smaller
      },
      {
        y: 0, // End at its natural position
        opacity: 1,
        scale: 1, // End at full size
        duration: 1.5,
        ease: "bounce.out", // Use the bounce ease for a bouncing effect
        delay: 0.5, // Optional delay before the animation starts
      }
    );
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Dashboard", label: "Identify Pain Point" },
    { href: "/Services", label: "Services" },
    { href: "/Contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-blue-950 sticky top-0 z-50 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              ref={logoRef}
              className="w-24 md:w-32"
              src={logo}
              alt="logo"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-lg font-semibold ${
                      pathname === href
                        ? "text-primaryColor"
                        : "hover:text-primaryColor"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Nav */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="hidden sm:block">
              <Image
                className="w-8 h-8 rounded-full"
                src={UserImg}
                alt="userImg"
              />
            </Link>
            <Link href="/Login">
              <button className="bg-primaryColor py-2 px-4 text-sm md:text-base font-semibold rounded-full">
                Login
              </button>
            </Link>
            <button
              className="lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Image
                src={showMenu ? Close : Menu}
                alt="Menu"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="lg:hidden">
          <SideMenu pathname={pathname} toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
