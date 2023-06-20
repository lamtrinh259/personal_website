"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  // Use the theme that the system is using, or take the default value of systemTheme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname()
  // Control whether we're in mobile or desktop mode
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link to="home">
              <div className="md:py-5 md:block">
                <h2 className="text-2xl font-bold">Lam Trinh</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div className={`flex-1 justify-end space-x-6 hidden md:flex items-center`}>
          <div className="flex space-x-6">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                to={item.page}
                className="text-lg font-medium text-slate-900 hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {currentTheme === "dark" ? (
            <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl">
              <RiSunFill size={24} color="black" />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl">
              <RiMoonFill size={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
