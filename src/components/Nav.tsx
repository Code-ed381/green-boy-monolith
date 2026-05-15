import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Music, Home, Phone, Info, Settings } from "lucide-react";

const Nav = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Check if we're over a dark background (at top of page)
      setIsDarkBackground(
        window.scrollY < 100 &&
          (location.pathname === "/artist" ||
            location.pathname === "/services" ||
            location.pathname === "/about" ||
            location.pathname === "/contact"),
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Music", href: "/music", icon: Music },
    { name: "Services", href: "/services", icon: Settings },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-border shadow-md"
          : isDarkBackground
            ? "bg-transparent border-b border-transparent"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 ml-8">
          <img
            src="/greenboylogo.png"
            alt="Green Boy Records logo"
            className="w-14 h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm transition-colors duration-150 flex items-center gap-2 ${
                location.pathname === link.href
                  ? "text-green-primary font-medium"
                  : isDarkBackground
                    ? "text-white hover:text-white/80"
                    : "text-gray-medium hover:text-gray-dark"
              }`}
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "bg-gray-bg hover:bg-gray-bg"
              : isDarkBackground
                ? "bg-transparent hover:bg-white/10"
                : "bg-transparent hover:bg-white/10"
          }`}
        >
          <div
            className={`w-6 h-0.5 mb-1.5 ${
              scrolled
                ? "bg-gray-dark"
                : isDarkBackground
                  ? "bg-white"
                  : "bg-gray-dark"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 mb-1.5 ${
              scrolled
                ? "bg-gray-dark"
                : isDarkBackground
                  ? "bg-white"
                  : "bg-gray-dark"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 ${scrolled ? "bg-gray-dark" : isDarkBackground ? "bg-white" : "bg-gray-dark"}`}
          ></div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
