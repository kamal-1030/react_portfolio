import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. 
                             With 5 years of hands-on experience, I have honed my skills in front-end technologie like Angular, 
                             as well as back-end technologies like Node.js, SpringBoot, Spring, MySQL, PostgreSQL, and MongoDB. 
                             My goal is to leverage my expertise to create innovative solutions that drive business growth and 
                             deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly 
                           web applications. With 5 years of professional experience, I have worked with a variety of technologies.
                            My journey in web development began with a deep curiosity for how things work, and it has evolved into 
                            a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments 
                            and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, 
                            I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Full stack consultant",
    company: "SPF Finances",
    description: `creat from scratch an application enabling civil servants to define and manage validation rules for the Tax-on-web application`,
    technologies: ["Angular", "Spring/SpringBoot", "MySql", "Cucumber", "Java"],
  },
  {
    year: "2022 - 2023",
    role: "Full stack consultant",
    company: "European Commission",
    description: `implemented and designed application to monitor legal services in the EU, with specific statuses (in progress, closed, processed) involving complex business processes.`,
    technologies: ["HTML", "CSS", "Angular", "mySQL", "Spring/SpringBoot"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack consultant",
    company: "Proximus",
    description: `implemented and designed application offers a new way of communicating with the customer by effectively inform him about the past, current and future steps of the process and thus give hm a better view on the complete process and when it will be completed. It's similar to a real metro map`,
    technologies: ["Angular", "MySql", "HTML", "CSS", "Spring/SpringBoot", "Javascript", "Cucumber"],

  },
  {
    year: "2019 - 2021",
    role: "Full Stack consultant",
    company: "European Commission",
    description: `Contributed to the development of web applications call CFS stands for Common Financial Services created for various funds in different DGs (DG EMPL, DG HOME). This is a new application for managing financial transactions. It is part of a bigger picture of microservice applications used to handle Shared Fund Mana.`,
    technologies: ["Angular", "MongoDB", "Spring/SpringBoot", "MySql"],
  },
  {
    year: "2019 - 2019",
    role: "Full Stack",
    company: "Arabel FM",
    description: `I developed web applications using MVC pattern and defining API and architecture layers. Development of web services using REST + Swagger for the API and Angular for the frontend part.`,
    technologies: ["Angular", "MySql", "HTML", "CSS", "Spring/SpringBoot", "Javascript"]
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  }
];
