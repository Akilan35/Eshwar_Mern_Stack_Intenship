import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Portfolio() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:akilanb28@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=Full Name: ${encodeURIComponent(formData.fullName)}%0D%0AEmail: ${encodeURIComponent(
      formData.email
    )}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0A%0D%0A${encodeURIComponent(
      formData.message
    )}`;

    window.location.href = mailtoLink;
  }
  const [togglemenu, settogglemenu] = useState(false);

  useEffect(() => {
    gsap.registerPlugin();
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    const magicCircle = document.getElementById('magic-circle');

    // Animate the magical collision
    gsap.fromTo(
      magicCircle,
      { scale: 0, opacity: 1, x: '50vw', y: '50vh' },
      {
        scale: 15,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          // After animation, scroll to projects
          projectsSection.scrollIntoView({ behavior: 'smooth' });
          gsap.to(magicCircle, { scale: 0, opacity: 0, duration: 0.5 });
        },
      }
    );
  };

  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center px-6 bg-gradient-to-r from-purple-700 to-blue-700 py-6 shadow-lg">
        <a href="#home" className="text-white text-2xl font-bold tracking-wide font-serif">Akilan</a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-gray-200 transition duration-300">About</a>
          <a href="#projects" className="text-white hover:text-gray-200 transition duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
        </nav>
        <button
          onClick={() => settogglemenu(!togglemenu)}
          className="block md:hidden focus:outline-none"
        >
          <Bars3Icon className="text-white h-6" />
        </button>
      </header>

      {/* Mobile Navigation */}
      {togglemenu && (
        <nav className="bg-purple-700 md:hidden">
          <ul className="flex flex-col text-white space-y-4 py-4 px-6">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Magical Collision Circle */}
      <div
        id="magic-circle"
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 pointer-events-none"
      ></div>

      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-purple-800 text-white py-40"
      >
        <img
          src="Akilan.jpg"
          alt="Akilan"
          className="w-40 h-40 rounded-full object-cover shadow-2xl mb-6 transform hover:scale-105 transition duration-300"
        />
        <h1 className="text-5xl font-extrabold tracking-wide">Hi, I'm Akilan</h1>
        <p className="mt-4 text-xl text-gray-200 text-center max-w-3xl">
          I’m passionate about AI, machine learning, and building interactive solutions that drive innovation.
        </p>
        <button
          onClick={handleScrollToProjects}
          className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition duration-300 shadow-lg"
        >
          Explore My Work
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">About Me</h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            I am a dedicated developer with expertise in Artificial Intelligence and Machine Learning.
            I love solving complex problems and creating user-friendly solutions that make a real-world impact.
          </p>
        </div>
      </section>

      {/* Projects Section */}
     {/* Projects Section */}
<section id="projects" className="bg-gradient-to-b from-purple-800 to-blue-800 py-24 px-6 text-white">
  <div className="max-w-6xl mx-auto text-center relative z-10">
    <h2 className="text-4xl font-extrabold mb-12">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
      {/* Project 1 */}
      <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 relative z-20">
        <h3 className="text-2xl font-bold text-blue-600">Energy Management System</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Built a system using CT sensors, Google Sheets, and LSTM models to predict electricity costs.
          Features a React Native interface and a Flask backend for efficient energy monitoring and goal setting.
        </p>
      </div>
      {/* Project 2 */}
      <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 relative z-20">
        <h3 className="text-2xl font-bold text-blue-600">Disaster Management System</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Developed a system to predict and verify disasters using real-time data, Electra models, and MongoDB.
          Provides precise insights for optimized disaster response operations.
        </p>
      </div>
    </div>
  </div>
</section>


       {/* Contact Section */}
       <section id="contact" className="py-24 px-6 bg-blue-800 text-white">
       <h2 className="text-4xl text-center font-extrabold">Contact Me</h2>
    <p className="mt-4 text-lg text-center text-gray-200">
      Feel free to reach out to discuss projects or collaborations!
    </p>
        <form className="mt-8 max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-4 rounded-lg bg-gray-800 text-white"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg bg-gray-800 text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-gray-800 text-white"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-4 rounded-lg bg-gray-800 text-white"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-gray-800 text-white h-32"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-5xl mx-auto text-center">
          <p>&copy; 2025 Akilan. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white transition duration-300">LinkedIn</a>
            <a href="#" className="hover:text-white transition duration-300">GitHub</a>
            <a href="#" className="hover:text-white transition duration-300">Twitter</a>
          </div>
        </div>
      </footer>
    </>
  );
}
