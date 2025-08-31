import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", text: "Home" },
    { to: "/products", text: "Products" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? "bg-emerald-500 py-2 shadow" : "bg-emerald-600 py-4"} transition-all`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white font-bold text-xl">E-Com</Link>
        <div className="hidden md:flex gap-4">
          {links.map(({ to, text }) => (
            <Link key={to} to={to} className="text-white hover:bg-emerald-700 px-3 py-2 rounded">
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
