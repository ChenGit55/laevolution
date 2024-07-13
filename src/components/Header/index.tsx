"use client";
import "./header.css";
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
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Menu */}
          <div
            className={`mt-2 w-full md:block md:w-auto ${
              expandNav ? "block" : "hidden"
            }`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-black md:dark:bg-transparent dark:border-gray-700">
              <li>
                <a href="/" className="navLink">
                  Home
                </a>
              </li>
              <li>
                <Link href="/private-training" className="navLink">
                  Private Training
                </Link>
              </li>
              <li>
                <Link href="/camps" className="navLink">
                  Camps
                </Link>
              </li>
              <li>
                <Link href="/schools" className="navLink">
                  Schools
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="navLink" aria-current="page">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <Link href="/" className="navLink">
            <Logo1 className="nav-logo" />
          </Link>
          {/* "hamburger" menu toggle */}
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
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
        </div>
      </nav>
    </header>
  );
}
