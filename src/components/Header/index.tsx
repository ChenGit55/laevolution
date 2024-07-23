"use client";
import "./header.css";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  // dropdown menu for screens smaller than 768px
  const [expandNav, setExpandNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setExpandNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  return (
    <header>
      <nav className="my-nav" ref={navRef}>
        <div className="responsive-menu">
          {/* "hamburger" menu toggle */}
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="md:hidden"
            aria-controls="navbar-solid-bg"
            onClick={() => {
              setExpandNav(!expandNav);
            }}
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
          <div
            className={`nav-menu md:block ${expandNav ? "block" : "hidden"}`}
            id="navbar-solid-bg"
          >
            <ul>
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
        </div>
        {/* Logo */}
        <div className="nav-brand">
          <Link href="/" className="navLink">
            <Image
              src={"/img/logos/Lion_Head_Original.svg"}
              height={70}
              width={70}
              alt="logo"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
