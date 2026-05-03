import React, { useState, useEffect } from "react";

const Navbar = () => {

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];

      sections.forEach((section) => {

        const element = document.getElementById(section);

        if (element) {

          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-purple-900 shadow-lg shadow-purple-900/10">

      <div className="w-full flex items-center justify-between px-6 md:px-12 py-5">

        {/* ================= LOGO ================= */}

        <div className="flex items-center gap-4">

          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition duration-300">

            Amol Patil

          </h1>

        </div>

        {/* ================= DESKTOP MENU ================= */}

        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">

          <li>
            <a
              href="#home"
              className={`transition duration-300 hover:text-purple-400 ${
                active === "home"
                  ? "text-purple-500"
                  : "text-gray-300"
              }`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`transition duration-300 hover:text-purple-400 ${
                active === "about"
                  ? "text-purple-500"
                  : "text-gray-300"
              }`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={`transition duration-300 hover:text-purple-400 ${
                active === "skills"
                  ? "text-purple-500"
                  : "text-gray-300"
              }`}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`transition duration-300 hover:text-purple-400 ${
                active === "projects"
                  ? "text-purple-500"
                  : "text-gray-300"
              }`}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`transition duration-300 hover:text-purple-400 ${
                active === "contact"
                  ? "text-purple-500"
                  : "text-gray-300"
              }`}
            >
              Contact
            </a>
          </li>

        </ul>

        {/* ================= RIGHT SIDE ================= */}

        <div className="hidden md:flex items-center gap-4">

          <img
            src="favicon.svg"
            alt="profile"
            className="w-14 h-14 rounded-full border-2 border-purple-500 shadow-lg shadow-purple-700/40 hover:scale-110 hover:rotate-6 transition duration-300"
          />

        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          <span className="w-7 h-1 bg-purple-500 rounded"></span>

          <span className="w-7 h-1 bg-purple-500 rounded"></span>

          <span className="w-7 h-1 bg-purple-500 rounded"></span>

        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (

        <div className="md:hidden bg-black border-t border-purple-900 px-6 py-6">

          <ul className="flex flex-col gap-6 text-lg font-medium">

            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

      )}

    </nav>
  );
};

export default Navbar;