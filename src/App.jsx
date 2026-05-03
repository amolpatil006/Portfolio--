import { useState, useEffect } from "react";
import Navbar from "./components/navbar";

function App() {

  const [text, setText] = useState("");

  const roles = [
    "Frontend Developer",
    "React Developer",
    "Problem Solver",
    "Computer Science Student",
  ];

  useEffect(() => {

    let roleIndex = 0;
    let charIndex = 0;

    const interval = setInterval(() => {

      setText(roles[roleIndex].slice(0, charIndex));

      charIndex++;

      if (charIndex > roles[roleIndex].length) {
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }

    }, 150);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-black text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
      >

        {/* Background Glow */}
        <div className="absolute top-20 w-[500px] h-[500px] bg-purple-700 opacity-20 blur-3xl rounded-full"></div>

        {/* Main Heading */}
        <h1 className="text-7xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse relative z-10">
          Amol Patil
        </h1>

        {/* Typing Text */}
        <p className="text-2xl md:text-4xl mt-6 text-gray-300 font-semibold relative z-10">
          {text}
          <span className="text-purple-500 animate-pulse">|</span>
        </p>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-gray-400 text-lg md:text-xl leading-9 relative z-10">
          Aspiring Web Developer passionate about creating modern,
          responsive and attractive websites using React and Tailwind CSS.
          Quick learner with strong problem solving skills and a deep
          interest in frontend development.
        </p>

        {/* Hero Buttons */}
        <div className="flex gap-8 mt-12 flex-wrap justify-center items-center relative z-10">

          <a
            href="#projects"
            className="inline-flex items-center justify-center min-w-[240px] px-10 py-5 text-xl md:text-2xl font-bold rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 shadow-2xl text-white"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center min-w-[240px] px-10 py-5 text-xl md:text-2xl font-bold rounded-full border-2 border-purple-500 hover:bg-purple-600 hover:scale-105 transition-all duration-300 shadow-2xl text-white"
          >
            Contact Me
          </a>

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-12 text-center">
          About Me
        </h1>

        <div className="bg-gray-900 border border-gray-800 shadow-2xl max-w-5xl p-10 rounded-3xl text-center">

          <p className="text-lg md:text-2xl text-gray-300 leading-10">

            I’m a Second Year B.Tech Computer Science and Engineering student at
            R. C. Patel Institute of Technology, Shirpur, currently maintaining
            a CGPA of 8.02.

            <br /><br />

            I focus on DSA using Java and modern web development. I enjoy
            building responsive websites and solving real-world coding problems
            using React and Tailwind CSS.

          </p>

        </div>

      </section>

      {/* ================= SKILLS SECTION ================= */}

      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-16 text-center">
          Skills
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">

          {[
            "Java",
            "C",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "GitHub",
          ].map((skill, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-purple-700 to-pink-600 px-10 py-8 rounded-3xl text-2xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl flex items-center justify-center text-center min-h-[140px]"
            >
              {skill}
            </div>

          ))}

        </div>

      </section>

      {/* ================= PROJECTS SECTION ================= */}

      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-20 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">

          {/* Project 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:-translate-y-3 hover:shadow-purple-500/20 transition-all duration-300 flex flex-col items-center text-center min-h-[520px]">

            <div className="flex flex-col items-center flex-grow">

              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-4xl mb-8 shadow-lg">
                💻
              </div>

              <h2 className="text-3xl font-bold text-purple-400 mb-6">
                Portfolio Website
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Modern responsive portfolio website built using React and
                Tailwind CSS with smooth scrolling, animations and attractive UI.
              </p>

            </div>

            <button className="mt-10 inline-flex items-center justify-center w-full px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:scale-105 transition-all duration-300 shadow-2xl text-white">
              Live Demo
            </button>

          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:-translate-y-3 hover:shadow-purple-500/20 transition-all duration-300 flex flex-col items-center text-center min-h-[520px]">

            <div className="flex flex-col items-center flex-grow">

              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-4xl mb-8 shadow-lg">
                🛒
              </div>

              <h2 className="text-3xl font-bold text-purple-400 mb-6">
                Amazon Clone
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Responsive Amazon frontend clone using React with modern product
                layout, navbar, homepage sections and mobile responsiveness.
              </p>

            </div>

            <button className="mt-10 inline-flex items-center justify-center w-full px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:scale-105 transition-all duration-300 shadow-2xl text-white">
              Live Demo
            </button>

          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:-translate-y-3 hover:shadow-purple-500/20 transition-all duration-300 flex flex-col items-center text-center min-h-[300px]">

            <div className="flex flex-col items-center flex-grow">

              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-4xl mb-8 shadow-lg">
                ✅
              </div>

              <h2 className="text-3xl font-bold text-purple-400 mb-6">
                To Do List
              </h2>

              <p className="text-gray-400 leading-8 text-lg">
                Task management application using React Hooks with add,
                delete, complete and dynamic task handling functionality.
              </p>

            </div>

            <button className="mt-10 inline-flex items-center justify-center w-full px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:scale-105 transition-all duration-300 shadow-2xl text-white">
              Live Demo
            </button>

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-12 text-center">
          Contact Me
        </h1>

        <div className="bg-gray-900 border border-gray-800 shadow-2xl p-10 rounded-3xl w-full max-w-3xl text-center">

          <p className="text-2xl mb-8 text-gray-300">
            Let’s build something amazing together 🚀
          </p>

          <div className="space-y-5 text-lg md:text-2xl text-gray-400">

            <p>📧 amolpatil44047@example.com</p>

            <p>📱 +91 9834564176</p>

            <p>📍 Shirpur, Maharashtra, India</p>

          </div>

          <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">

            <button className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-2xl text-white">
              GitHub
            </button>

            <button className="inline-flex items-center justify-center min-w-[220px] px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-pink-600 to-red-500 hover:scale-105 transition-all duration-300 shadow-2xl text-white">
              LinkedIn
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 Amol Patil | Built with React & Tailwind CSS
      </footer>

    </div>
  );
}

export default App;