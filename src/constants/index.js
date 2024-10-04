import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  home,
  map,
  redux,
  tailwind,
  sorting,
  Apple,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "3D Js Designer",
    iconBg: "#E6DEDD",
    points: [
      "Developed a 3D product visualizer using Three.js and Framer Motion to showcase products with dynamic interactions.",
      "Integrated smooth camera transitions",
    ],
  },
  {
    title: "Full stack Developer(Intern)",
    company_name: "Sarvin",
    iconBg: "#E6DEDD",
    points: [
      "Assisted in developing and maintaining server-side functionality using Node.js.",
      "Designed and implemented interfaces for backend functions.",
      "Ensured robust data connections and server connectivity",
      "Conducted testing to verify data accuracy and server interactions.",
    ],
  },
];

const projects = [
  {
    name: "Real Estate",
    description:
      "Developed a full-stack Real-Estate application using the MERN stack, enabling house renting, selling and renting.",
    tags: [
      {
        name: "Mern Stack",
        color: "green-text-gradient",
      },
    ],
    image: home,
    source_code_link: "https://github.com/dashanwesha/Real-Estate",
  },
  {
    name: "Real Time-Tracker",
    description:
      "Built a time tracker using Node.js, Express and Socket.IO, enabling live updates,real-time communication between clients and servers.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: map,
    source_code_link: "https://github.com/dashanwesha/Real-Time-Tracker"
  },
  {
    name: "Sorting Visualizer",
    description:
      "Implemented a sorting visualizer featuring Bubble Sort, Quick Sort, and Selection Sort in HTML, CSS, Javascript to demonstrate algorithm efficiency.",
    tags: [
      {
        name: "Bubble Sort",
        color: "blue-text-gradient",
      },
      {
        name: "Quick Sort",
        color: "green-text-gradient",
      },
      {
        name: "Selection Sort",
        color: "pink-text-gradient",
      },
    ],
    image: sorting,
    source_code_link: "https://github.com/dashanwesha/sorting-visualizer"
  },
  {
    name: "3D Apple Site",
    description:
      "Implemented smooth animations, transitions and transitions to create an immersive User experience , enhancing visual appeal and interactivity.",
    tags: [
      {
        name: "3D Animations",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      }
    ],
    image: Apple,
    source_code_link: " https://github.com/dashanwesha/Apple-Project"
  },
];

export { services, technologies, experiences, projects };
