import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`site-nav ${scrolled ? "scrolled" : ""}`}
    >
      <div className="brand">ECHOES</div>

      {/* Hamburger Icon */}
      <div onClick={toggleMenu} className="hamburger">
        <div
          style={{
            width: "2rem",
            height: "0.25rem",
            background: "#fff",
            borderRadius: "10px",
            transition: "all 0.3s linear",
            transform: isOpen
              ? "rotate(45deg) translate(5px, 5px)"
              : "rotate(0)",
          }}
        />
        <div
          style={{
            width: "2rem",
            height: "0.25rem",
            background: "#fff",
            borderRadius: "10px",
            transition: "all 0.3s linear",
            opacity: isOpen ? 0 : 1,
          }}
        />
        <div
          style={{
            width: "2rem",
            height: "0.25rem",
            background: "#fff",
            borderRadius: "10px",
            transition: "all 0.3s linear",
            transform: isOpen
              ? "rotate(-45deg) translate(7px, -7px)"
              : "rotate(0)",
          }}
        />
      </div>

      {/* Desktop Menu */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {["Home", "About Me", "Projects", "Skills", "Contact"].map((item) => (
          <li key={item} style={{ margin: "1rem 0" }}>
            <Link
              to={item.toLowerCase().replace(" ", "-")}
              smooth={true}
              duration={800}
              offset={-50}
              onClick={() => setIsOpen(false)}
              style={{
                cursor: "pointer",
                color: "#E0E0E0",
                textDecoration: "none",
                fontSize: "1.2rem", // Larger for mobile touch
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                opacity: 0.8,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.8)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
