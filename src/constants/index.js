import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  spring,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  java,
  growguide,
  meta,
  starbucks,
  tesla,
  shopify,
  coeat,
  smooc,
  pernotes,
  uestc,
  nyu,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Spring",
    icon: spring,
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
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const educations = [
  {
    title: "University of Electronic Science and Technology of China",
    degree: "Bachelor of Engineering in Electrical and Electronic Engineering",
    icon: uestc,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jun 2023",
    position: "Chengdu, China",
  },
  {
    title: "New York University",
    degree: "Master of Science in Computer Engineering",
    icon: nyu,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - May 2025",
    position: "New York, NY",
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Software Engineer Intern",
    company_name: "Growguide",
    icon: growguide,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Jun 2024",
    points: [
      "Contributed to the development of an E-commerce platform, including learning and marketplace.",
      "Collaborated with UI/UX team and utilized Figma to design and reconstruct the minimum viable product.",
      "Crafted responsive user interfaces using HTML, CSS and React, employed DevOps with CI/CD and utilized Git for version control, achieving 15% increase in team productivity and 22% reduction in deployment errors.",
      "Orchestrated seamless integration of Google Firebase for robust data management and adopted OAuth2 protocol for third party login, boosting system performance by 20% and enhancing authorization security.",
      "Designed and Delivered a personalized weather service on user dashboards with local weather APIs, driving a 33% improvement in user engagement and 23% increase in average session duration.",
      "Built efficient RESTful APIs for data manipulation, improving code reusability and reducing redundancy by 25%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pernotes",
    description:
      "A personal knowledgebase system that allows users to write, plan and organize their notes.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: pernotes,
    source_code_link: "https://github.com/",
  },
  {
    name: "CoEat",
    description:
      "A takeout ordering and review website for restaurant management and customer usage.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "orange-text-gradient",
      },
    ],
    image: coeat,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smooc",
    description:
      "A scalable online learning platform using Microservice, which includes learning center, course management and social system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "rabbitmq",
        color: "pink-text-gradient",
      },
      {
        name: "elasticsearch",
        color: "orange-text-gradient",
      },
    ],
    image: smooc,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};
