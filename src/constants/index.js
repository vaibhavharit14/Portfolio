import project1 from "../assets/projects/Netflix.jpeg";
import project2 from "../assets/projects/E-Comm.png";
import project3 from "../assets/projects/Portfolio.png";
import project4 from "../assets/projects/Car.jpg";
import project5 from "../assets/projects/Wine.png";
import project6 from "../assets/projects/Real-State.png";
import project7 from "../assets/projects/BlueStone.png";
import project8 from "../assets/projects/Shoes.png";
import project9 from "../assets/projects/Hotel.png";
import { link } from "framer-motion/client";

export const HERO_CONTENT = `I'm a passionate Frontend Developer with a sharp eye for design and a love for clean, scalable code. I specialize in building responsive, user-friendly web interfaces using React, Vite, Tailwind CSS, HTML, CSS, and JavaScript. Whether it's crafting pixel-perfect layouts or debugging deployment issues, I thrive on turning ideas into elegant digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Vite, Jquary, BootStrap, Firebass, and API. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Netflix-Clone",
    image: project1,
    description:
      "A complete Netflix-inspired web application built using React, Tailwind CSS, and Vite, featuring Firebase Authentication, real-time database, and movie data fetched from TMDB API. This project replicates core Netflix functionality with a polished UI and secure backend logic.",
    technologies: ["HTML", "CSS", "React", "Vite","Firebase"],
    link:"https://netflix-clone-beta-rouge-45.vercel.app",
  },
   {
    title: "Luxury Hotel Booking",
    image: project9,
    description:
      "Experience luxury and comfort with our curated suites and rooms, designed for elegance and convenience. Book seamlessly with modern amenities like daily cleaning, home service, Wi‑Fi, and parking — all at your fingertips.",
    technologies: ["HTML", "CSS","JavaScript", "React", "Vite"],
    link:"https://vaibhavharit14.github.io/Luxury-Hotel-Booking/",
  },
  {
    title: "E-Commerce Website ",
    image: project2,
    description:
      "This is a modern, responsive e-commerce website built with React ,HTML and CSS, showcasing a curated collection of limited edition watches. Designed for exclusivity and elegance, the site offers a seamless shopping experience with dynamic cart functionality, product detail views, and stylish animations.",
    technologies: ["HTML", "CSS", "JavaScript","React" ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite", "Tailwind CSS"],
    link:"https://portfolio-weld-beta-14.vercel.app/",
  },
  {
    title: "Luxury Car Rental",
    image: project4,
    description:
      "Developed a sleek and responsive luxury car rental website using HTML, CSS, and JavaScript, allowing users to browse and select premium vehicles based on their preferences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:" https://vaibhavharit14.github.io/Luxury-Car-Rental/",
  },
  {
    title: "Louise XIII ",
    image: project5,
    description:
      "This is a premium alcoholic beverage website clone of Louis XIII, developed using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://vaibhavharit14.github.io/Wine-LouisXIII-Clone/wine.html",
  },
  {
    title: "RealState",
    image: project6,
    description:
      "A responsive and modern web application for browsing rental properties, built using HTML ,CSS and JAVASCRIPT. This project simulates a real-world real estate platform, allowing users to explore available houses, view detailed listings, and filter results based on location, price, and amenities.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://vaibhavharit14.github.io/RealState/",
  },
  {
    title: "BlueStone Clone",
    image: project7,
    description:
      "A responsive frontend clone of the Bluestone jewelry website built using HTML, CSS, and JavaScript. This project recreates the look and feel of the original site, including product sections, navigation menus, and interactive UI elements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://vaibhavharit14.github.io/BlueStone-Clone/",
  },
  {
    title: "Shoes website",
    image: project8,
    description:
      "An interactive footwear e-commerce website built with HTML,CSS and JavaScript. Designed to be responsive across devices with engaging UI components.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"https://vaibhavharit14.github.io/Shoes-Project/",
  }
];

export const CONTACT = {
  phoneNo: "+91 8463875285 ",
  email: "v.harit14@gmail.com",
};
