import JOBIFY from "../assets/jobify.png";
import BOOKSHOP from "../assets/bookshop.png";
import TODOAPP from "../assets/todoapp.png";
import INVOICE from "../assets/invoice.png";
import CRYPTO from "../assets/crypto.png";
import DADJOKES from "../assets/dadjokes.jpeg";

const projects = [
  {
    title: "Invoice Management App",
    description:
      "An Invoice Management Dashboard built with latest NextJS features.",
    techStack: "NodeJS | NextJS | ReactJS | PostgreSQL | Tailwind CSS",
    githubLink: "",
    websiteLink: "https://dashboard-nextjs-dun-nine.vercel.app/",
    imageSrc: INVOICE,
  },
  {
    title: "Jobify",
    description: "A platform letting job seekers to add/edit/delete their application status. With a fully implemented login/logout system. Allow around 1 minute for the webpage to load",
    techStack: "ReactJS | NodeJS | MongoDB | Express",
    githubLink: "https://github.com/josephsun22/jobify-live",
    websiteLink: "https://jobify-live-rqno.onrender.com",
    imageSrc: JOBIFY,
  },
  {
    title: "Asset Tracker App",
    description:
      "An asset tracker app that helps track cryptocurrencies, built with Next.js.",
    techStack: "NodeJS | NextJS | ReactJS",
    githubLink: "",
    websiteLink: "https://asset-tracker-app.vercel.app/",
    imageSrc: CRYPTO,
  },
  {
    title: "Dad Jokes App",
    description:
      "Help dads to prepare jokes for kids! This app fetches jokes from an API and displays them, with a feature to search joke by specific term.",
    techStack: "NextJS | ReactJS | Tailwind CSS",
    githubLink: "",
    websiteLink: "https://dad-jokes-jade.vercel.app/",
    imageSrc: DADJOKES,
  },
  {
    title: "Book Hunter",
    description: "A CRUD application for managing a book collection, plus AI generation feature.",
    techStack: "VueJS | CodeIgniter | MySQL | REST APIs",
    githubLink: "https://github.com/josephsun22/bookCollection",
    websiteLink: "",
    imageSrc: BOOKSHOP,
  },
  {
    title: "To-Do App",
    description:
      "A simple To-Do App that allows users to create, update, and delete tasks.",
    techStack: "NodeJS | ReactJS | ASP.NET Core | Tailwind CSS",
    githubLink: "https://github.com/josephsun22/to-do-app",
    websiteLink: "",
    imageSrc: TODOAPP,
  },
  // {
  //   title: "Course Hunter",
  //   description:
  //     "CourseShare is an online platform designed to facilitate the sharing and discovery of educational courses. It provides users with a seamless experience to browse, enroll, and share courses across various topics.",
  //   techStack: "CodeIgniter | MySQL | BootStrap",
  //   githubLink: "https://github.com/josephsun22/course_hunter",
  //   websiteLink: "",
  //   imageSrc: "",
  // },
];

export default projects;
