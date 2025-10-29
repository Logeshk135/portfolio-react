import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {  FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase,} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiExpress,} from "react-icons/si";
import { HiMenu, HiX } from "react-icons/hi";
import profile from "./assets/Profile.jpg";
import resume from "./assets/resume.pdf";

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
    <div className="bg-black-to-br from-yellow-50 to-orange-100 text-gray-900 font-sans scroll-smooth">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div>
          <h1 className="text-3xl font-bold text-yellow-400">Logesh K</h1>
          <p className="text-sm text-gray-300">MERN Full Stack Developer</p>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
          <li><a href="#resume" className="hover:text-yellow-400 transition">Resume</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="flex flex-col bg-gray-500 text-white p-4 space-y-1 md:hidden text-start">
          {["home", "about", "skills", "projects", "resume", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* ✅ Home Section */}
    {/* Left Side */}
    <section
    id="home"
    className="bg-[#05606d] text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16"
  >
    {/* Left Section */}
    <div className="flex-1 text-center md:text-left space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold">
        Hi, <br />
        <span className="text-yellow-400">I'm Logesh Kumar</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 font-light">
        Full-Stack Web Developer | MERN Stack | BCA 2025
      </p>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start gap-6 text-3xl mt-6">
        <a
          href="mailto:logeshdeveloper@gmail.com"
          className="hover:text-yellow-400 transition duration-300 hover:scale-125"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/logeshkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/logeshk135"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 hover:scale-125"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition duration-300 hover:scale-125"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>

        {/* Right */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={profile}
            alt="Logesh K"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
          />
        </div>
      </section>

      {/* ✅ About Section */}
      <section id="about" className="py-20 px-10 bg-white text-center md:text-left flex flex-col md:flex-row items-center gap-10">
        <img
          src={profile}
          alt="Profile"
          className="w-52 h-52 md:w-64 md:h-64 rounded-full shadow-xl border-4 border-yellow-400 object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I’m <b>Logesh K</b>, a passionate and motivated <b>Full Stack MERN Web Developer</b> and <b>BCA student (Batch 2022–2025)</b>.
            As a fresher, I’m eager to apply my skills in real-world projects and create impactful digital experiences.
            I specialize in building responsive and user-friendly web apps using <b>React.js, Node.js, Express.js, and MongoDB</b>.
          </p>
        </div>
      </section>

      {/* ✅ Skills Section */}
      <section id="skills" className="py-20 px-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-xl px-6 py-5 w-32 hover:scale-105 transition"
            >
              {skill.icon}
              <p className="mt-3 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Projects Section */}
      <section id="projects" className="py-20 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <a
            href="https://logeshk135.github.io/pizza-webisite-forntend/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-2">🍕 Pizza Ordering Website</h3>
            <p>Frontend CRUD project for pizza ordering built using HTML, CSS, and JS.</p>
          </a>

          <a
            href="https://mens-shop-react-7qgw.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-2">🛍️ Men’s Shop Website</h3>
            <p>React.js frontend project for an e-commerce store layout.</p>
          </a>
        </div>
      </section>

      {/* ✅ Resume Section */}
<section
  id="resume"
  className="min-h-screen bg-[#2f3b52] flex flex-col items-center justify-center px-6 py-20"
>
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-white mb-2">Resume</h2>
    <p className="text-gray-300">You can view and download my resume</p>
  </div>

  <div className="flex flex-col md:flex-row items-center justify-center gap-12">
    {/* Left - Resume Image or PDF Preview */}
    <div className="bg-white p-4 rounded-xl shadow-2xl w-[320px] md:w-[400px]">
      <object
        data={resume}
        type="application/pdf"
        width="100%"
        height="480px"
        className="rounded-lg"
      >
        <p className="text-gray-700 text-center mt-4">
          Your browser doesn’t support PDF viewing.  
          <a href={resume} download="LogeshK_Resume.pdf" className="text-blue-500 underline">
            Click here to download
          </a>.
        </p>
      </object>
    </div>

    {/* Right - Download Info */}
    <div className="text-center md:text-left">
      <h3 className="text-3xl font-semibold text-white mb-4">Download</h3>
      <p className="text-gray-300 mb-6">
        Click below to download my single-page resume.
      </p>
      <a
        href={resume}
        download="LogeshK_Resume.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
      >
        Download Resume
      </a>
    </div>
  </div>
</section>

     {/* ✅ Contact Section */}
<section
  id="contact"
  className="min-h-screen bg-[#1E293B] flex flex-col items-center justify-center px-6 py-20"
>
  <h2 className="text-4xl font-bold text-white mb-2 border-b-4 border-gray-400 pb-2">
    Contact
  </h2>

  <div className="mt-8 text-gray-300 space-y-3">
    <p>
      📧 <span className="font-semibold text-white">Email:</span>{" "}
      <a
        href="mailto:logeshk135@gmail.com"
        className="text-blue-400 hover:underline"
      >
        logeshk135@gmail.com
      </a>
    </p>
    <p>
      📞 <span className="font-semibold text-white">Phone:</span>{" "}
      <a href="tel:+918825696584" className="text-blue-400 hover:underline">
        +91 8825696584
      </a>
    </p>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center md:justify-start gap-6 text-3xl mt-6">
        <a
          href="mailto:logeshdeveloper@gmail.com"
          className="hover:text-yellow-400 transition duration-300 hover:scale-125"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/logeshkumar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/logeshk135"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 hover:scale-125"
        >
          <FaGithub />
        </a>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition duration-300 hover:scale-125"
        >
          <FaWhatsapp />
        </a>
      </div>

</section>

      {/* ✅ Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p className="text-sm text-gray-400">© 2025 Logesh K — All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
