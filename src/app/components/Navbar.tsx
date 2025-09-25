"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Corporate Training", path: "/trainings" },
    { name: "Project Support", path: "/projectsupports" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <div className="fixed w-full z-50">
      {!scrolled && (
        <div className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-600 text-white text-sm font-medium py-2 text-center shadow-md">
          Empowering Global IT Success: Training, Project Support & Recruitment - USA | Canada | Luxembourg | India - contact@rvit.co.in
        </div>
      )}

      {/* Navbar */}
      <header
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/assets/image.png"
                alt="RVIT Logo"
                width={100}
                height={80}
                className="w-20 object-contain"
                priority
              />
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium tracking-wide transition-all ${
                    pathname === item.path
                      ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                      : "text-gray-800 hover:text-indigo-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Us Button */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href="/contactus"
                className="bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.path
                        ? "bg-gray-200 text-indigo-700"
                        : "text-gray-800 hover:bg-gray-100 hover:text-indigo-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="/contactus"
                  className="mt-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white px-5 py-2 rounded-full font-semibold shadow-md text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
