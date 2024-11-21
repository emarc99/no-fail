import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="mt-9 py-3 border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-16 w-12 mr-4" src={logo} alt="Logo" />
              <span className="font-['UNDERRATED'] text-xl font-extrabold">
                NOFAIL
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-[#3835ED]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Link
                to="/login"
                className="py-3 px-10 border border-black rounded-full hover:border-transparent hover:bg-[#3835ED80] hover:text-white"
              >
                Log In
              </Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a
                  href="/login"
                  className="py-2 px-3 border border-black rounded-full hover:border-transparent hover:bg-[#3835ED80] hover:text-white"
                >
                  Log In
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
