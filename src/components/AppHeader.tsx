"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Container from "./Container";

const links = [
  { to: "#features", label: "Features" },
  { to: "#solution", label: "Solution" },
  { to: "#reviews", label: "Reviews" },
  { to: "https://github.com/luasenvy/nextjs-astro-theme", label: "NextJS Version" },
];

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navState = useMemo(() => (isOpen ? "active" : ""), [isOpen]);

  return (
    <header>
      <nav
        id="nav"
        data-state={navState}
        className="absolute group z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent"
      >
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
              <Link href="#home" aria-label="logo" className="flex items-center space-x-2">
                <span className="font-racing-sans-one text-2xl font-bold text-gray-900 dark:text-white">Adlib Go</span>
              </Link>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="hamburger"
                  id="hamburger"
                  className="relative -mr-6 p-6 active:scale-95 duration-300"
                  onClick={() => setIsOpen((v) => !v)}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-top group-data-[state=active]:rotate-45 group-data-[state=active]:translate-y-1.5"
                  />
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-950 transition duration-300 dark:bg-white origin-bottom group-data-[state=active]:-rotate-45 group-data-[state=active]:-translate-y-1"
                  />
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 group-data-[state=active]:origin-top group-data-[state=active]:scale-y-100 dark:bg-gray-950/70 lg:hidden"
            />
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent group-data-[state=active]:visible group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 lg:group-data-[state=active]:translate-y-0"
            >
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <div id="links-group" className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.to}
                      className="hover:text-primary block transition dark:hover:text-white md:px-4"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                  <a
                    href="https://tailtips.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4"
                  >
                    <span>TailwindCSS Tips</span>
                    <span className="flex rounded-full border bg-primary/20 px-2 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300">
                      New
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="/register"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
