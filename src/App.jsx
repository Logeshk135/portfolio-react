import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress } from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";

import profile from "./assets/Profile.jpg";
import resume from "./assets/resume.pdf";
import logo from "./assets/logo.jpg";
import animat from "./assets/animation.jpg";
import pizzaImg from "./assets/pizza.png";
import shopImg from "./assets/shop.png";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "MySQL", icon: <FaDatabase className="text-blue-700 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 text-gray-900 font-sans scroll-smooth">
      {/* ✅ HEADER */}
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border-2 border-yellow-400" />
          <h1 className="text-2xl font-bold tracking-wide">
            <span className="text-yellow-400">L</span>O<span className="text-yellow-400">G</span>ESH K
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-bold sticky top-0 z-50 scroll-smooth">
          {["home", "about", "skills", "projects", "resume", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-yellow-400  transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>


        {/* 🌙 Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
            // 🧠 Disable/enable background scroll when menu is open
            if (!menuOpen) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "auto";
            }
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </header>

      {/* ✅ MOBILE MENU - Semi Transparent & Always on Top */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full backdrop-blur-md bg-black/90 text-white transition-all duration-500 ease-in-out z-[999] ${menuOpen
          ? "max-h-96 py-4 opacity-100 pointer-events-auto"
          : "max-h-0 py-0 opacity-0 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-start px-6 space-y-3 font-bold text-lg">
          {["home", "about", "skills", "projects", "resume", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block hover:text-yellow-400 transition"
                onClick={() => {
                  setMenuOpen(false);
                  document.body.style.overflow = "auto";
                  setTimeout(() => {
                    const section = document.querySelector(`#${item}`);
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 200);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>



      {/* ✅ HOME SECTION FIXED */}
      <section
        id="home"
        className="bg-cyan-950 text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 text-center md:text-left relative overflow-hidden"
      >
        {/* LEFT TEXT */}
        <div className="flex-1 space-y-6 relative z-[40]">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, <br /> <span className="text-yellow-400">I'm Logesh K</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light">
            Full-Stack Developer | MERN | BCA 2025
          </p>

          {/* ✅ Social Icons — Clickable now */}
          <div className="flex justify-center md:justify-start gap-6 text-3xl mt-6 space-y-6 relative z-40">
            <a
              href="mailto:logeshk135@gmail.com"
              className="hover:text-yellow-400 transition hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://linkedin.com/in/logeshk135"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/logeshk135"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/918825696584"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition hover:scale-125"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* ✅ Right Image - Adjusted for mobile */}
        <div className="flex-1 flex justify-center md:justify-end mt-4 md:mt-0 relative z-10">
          <img
            src={animat}
            alt="Animation"
            className="w-64 md:w-[420px] rounded-3xl shadow-2xl md:-translate-x-6 animate-float transform -translate-y-6 md:translate-y-0 transition-all duration-500"
          />
        </div>

      </section>


      {/* ✅ ABOUT SECTION */}
      <section id="about" className="py-20 px-8 bg-white text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        <img src={profile} alt="Profile" className="w-60 md:w-72 rounded-3xl border-4 border-yellow-400 shadow-lg" />
        <div className="flex-1">
          <center><h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2></center>
          <p className="text-lg text-gray-700 text-justify leading-relaxed">
            I’m <b>Logesh K</b>, a passionate and motivated <b>Full Stack Web Developer</b> and <b>BCA Student (Batch 2022–2025)</b> with a strong interest in building dynamic and user-focused web applications.
            As a fresher, I have hands-on experience in developing responsive websites using <b>HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB</b>. I enjoy learning new technologies, solving problems, and turning creative ideas into real-world digital solutions.
            I’m constantly exploring modern development practices to enhance my skills and stay updated with the latest industry trends. My focus is on writing clean, efficient code and building applications that offer great performance and usability.
          </p>
        </div>
      </section>

      {/* ✅ SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center bg-white shadow-lg rounded-xl px-6 py-5 w-28 sm:w-32 hover:scale-105 transition">
              {skill.icon}
              <p className="mt-2 font-semibold text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <a href="https://logeshk135.github.io/pizza-webisite-forntend/" target="_blank" className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={pizzaImg} alt="Pizza Ordering" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">🍕 Pizza Ordering Website</h3>
              <p>A responsive CRUD pizza ordering app built using HTML, CSS.</p>
            </div>
          </a>

          <a href="https://mens-shop-react-7qgw.vercel.app/" target="_blank" className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={shopImg} alt="Men's Shop" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">🛍️ Men’s Shop Website</h3>
              <p>A stylish React.js e-commerce frontend project with smooth navigation.</p>
            </div>
          </a>
        </div>
      </section>

      {/* ✅ RESUME SECTION */}
      <section id="resume" className="bg-[#0e0536] text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Resume</h2>
        <p className="text-gray-300 mb-10">View or download my resume below 👇</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <object data={resume} type="application/pdf" width="320" height="450" className="rounded-lg shadow-2xl"></object>
          <a href={resume} download="LogeshK_Resume.pdf" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition">
            Download Resume
          </a>
        </div>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section id="contact" className="bg-red-950 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-gray-400 inline-block pb-2">Contact</h2>
        <p className="text-lg text-center max-w-2xl mb-10">
          I'm a <span className="font-semibold">fresher</span> passionate about web
          development and eager to learn new technologies.
          If you think I’d be a great fit for your team or have any suggestions,
          feel free to contact me below.
        </p>

        <div className="text-gray-300 text-lg space-y-2">
          <p>Email: <a href="mailto:logeshk135@gmail.com" className="text-blue-400 hover:underline">logeshk135@gmail.com</a></p>
          <p>Phone: <a href="tel:+918825696584" className="text-blue-400 hover:underline">+91 8825696584</a></p>
        </div>

        <div className="flex justify-center gap-6 text-3xl mt-8">
          <a href="mailto:logeshk135@gmail.com" className="hover:text-yellow-400 transition hover:scale-125"><FaEnvelope /></a>
          <a href="https://linkedin.com/in/logeshk135" target="_blank" className="hover:text-blue-400 transition hover:scale-125"><FaLinkedin /></a>
          <a href="https://github.com/logeshk135" target="_blank" className="hover:text-gray-300 transition hover:scale-125"><FaGithub /></a>
          <a href="https://wa.me/918825696584" target="_blank" className="hover:text-green-400 transition hover:scale-125"><FaWhatsapp /></a>
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer className="bg-black text-white py-6 text-center">
        <p className="text-sm text-gray-400">© 2025 Logesh K — All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
