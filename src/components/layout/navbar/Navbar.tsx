import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import Container from "../../ui/Container";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Mobile Menu When Clicking Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1115]/80 backdrop-blur-xl border-b border-white/10 shadow-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="KANAAN TEX"
              className="h-12 w-auto transition duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 text-white font-medium">

            <Link
              to="/"
              className="transition hover:text-[#B2D234]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition hover:text-[#B2D234]"
            >
              About
            </Link>

            <Link
              to="/products"
              className="transition hover:text-[#B2D234]"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-[#B2D234]"
            >
              Contact
            </Link>

            <Link
              to="/report"
              className="transition hover:text-[#B2D234]"
            >
              Report
            </Link>

          </nav>

          {/* Desktop Button */}
          <button className="hidden lg:block rounded-full bg-[#B2D234] px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(178,210,52,.4)]">
            Request Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white transition-all duration-300 hover:border-[#B2D234] hover:text-[#B2D234]"
          >
            {isOpen ? (
              <HiOutlineXMark size={30} />
            ) : (
              <HiOutlineBars3 size={30} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="mt-5 rounded-3xl border border-white/10 bg-[#0F1115]/95 backdrop-blur-xl p-6 lg:hidden animate-in fade-in duration-300"
          >
            <div className="flex flex-col gap-6 text-white">

              <Link onClick={() => setIsOpen(false)} to="/">
                Home
              </Link>

              <Link onClick={() => setIsOpen(false)} to="/about">
                About
              </Link>

              <Link onClick={() => setIsOpen(false)} to="/products">
                Products
              </Link>

              <Link onClick={() => setIsOpen(false)} to="/contact">
                Contact
              </Link>

              <Link onClick={() => setIsOpen(false)} to="/report">
                Report
              </Link>

              <button className="mt-3 rounded-full bg-[#B2D234] py-3  font-semibold text-black">
                Request Quote
              </button>

            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;