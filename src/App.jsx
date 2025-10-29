import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import profile from "./assets/Profile.jpg";


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 text-gray-900 font-serif scroll-smooth">
      {/* Header Section */}
      <header className="bg-black text-white py-4 px-5 flex justify-between items-center sticky top-0 z-50 shadow-md">
        {/* Left Side - Name & Title */}
        <div className="text-start">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">Logesh K</h1>
          <p className="text-xl md:text-2xl mt-2">Frontend Web Developer</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Icon at the end */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden bg-gray-800 p-4 rounded-lg sticky top-0 z-50 shadow-md ">
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>
      )}




      {/* About Section */}
      <section id="about" className="py-40 px-10 bg-white text-center md:text-start flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Logesh K"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg border-4 border-yellow-400 object-cover"
          />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I’m <b>Logesh K</b>, a passionate and motivated <b>Full Stack Web Developer</b> and <b>BCA Student (Batch 2022–2025)</b> with a strong interest in building dynamic and user-focused web applications.
            As a fresher, I have hands-on experience in developing responsive websites using <b>HTML, CSS, JavaScript, React.js, Node.js, Express.js,</b> and <b>MongoDB</b>. I enjoy learning new technologies,
             solving problems, and turning creative ideas into real-world digital solutions.
            I’m constantly exploring modern development practices to enhance my skills and stay updated with the latest industry trends. My focus is on writing clean, efficient code and building applications that offer great performance and usability.
          </p>
        </div>
      </section>

      <section id="skills" className="py-30 px-10 bg-red-400 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["HTML", "CSS", "JavaScript", "C++", "React.js", "MySql", "Tailwind CSS", "Mongodb"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-white shadow-md px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-100 transition"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      <section id="projects" className="py-30 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <a
            href="https://logeshk135.github.io/pizza-webisite-forntend/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-red-500 text-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-2">Pizza Ordering Website</h3>
            <p>
              A pizza ordering web app built using HTML, CSS (Frontend) with full
              CRUD functionality. click ---box
            </p>
          </a>

          <a
            href="https://mens-shop-react-7qgw.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-500 text-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-2">Mens Shop Website</h3>
            <p>
              A completed React project mens shop website (frontend only). click ---box
            </p>
          </a>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-30 px-10 bg-yellow-50 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
        <p className="text-lg mb-4">
          Want to collaborate or hire me? Reach out anytime!
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <div className="space-x-6  flex justify-center items-center flex-row">
          <a
            href="https://github.com/logeshk135"
            target="_blank"
            className="text-white-400 hover:underline"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="bg-blue-700 text-white-400 hover:underline"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="mt-3 text-gray-400">© 2025 Logesh K — All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
