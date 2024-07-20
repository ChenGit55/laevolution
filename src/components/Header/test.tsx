//uselcient
import React, { useState } from "react";
import Link from "next/link";
import Logo1 from "../SvgComponents/Logo1";

export default function Header() {
  const [expandNav, setExpandNav] = useState(false);

  const toggle = () => {
    setExpandNav(!expandNav);
  };

  return (
    <header>
      {/* Conteúdo do Header */}
      <nav className="my-nav border-gray-200 bg-black dark:bg-black dark:border-gray-700">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link href="/" className="navLink ml-auto">
            <Logo1 className="nav-logo" />
          </Link>
          {/* "hamburger" menu toggle */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={expandNav ? "true" : "false"}
            onClick={toggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Menu */}
          <ul
            className={`absolute left-0 right-0 mt-2 w-full bg-gray-50 rounded-lg md:static md:flex md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-black md:dark:bg-transparent dark:border-gray-700 ${
              expandNav ? "block" : "hidden"
            }`}
          >
            <li>
              <a href="/" className="block px-4 py-2 text-gray-800 navLink">
                Home
              </a>
            </li>
            <li>
              <Link href="/private-training">
                <a className="block px-4 py-2 text-gray-800 navLink">
                  Private Training
                </a>
              </Link>
            </li>
            <li>
              <Link href="/camps">
                <a className="block px-4 py-2 text-gray-800 navLink">Camps</a>
              </Link>
            </li>
            <li>
              <Link href="/schools">
                <a className="block px-4 py-2 text-gray-800 navLink">Schools</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <a
                  className="block px-4 py-2 text-gray-800 navLink"
                  aria-current="page"
                >
                  About Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
