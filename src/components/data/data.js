import { nanoid } from "nanoid";
import chatbot from "../Image/chatbot.png";
import robofrinds from "../Image/robofriends.png";
import todolist from "../Image/todolist.png";
import smartbrain from "../Image/smartbrain.png";
import safetyfirst from "../Image/safetyfirst.png";

// HEAD DATA
export const headData = {
  title: "", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "",
  subtitle: "",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "",
  paragraphTwo: "",
  paragraphThree: "",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: safetyfirst,
    title: "safetyfirst",
    info: "It is a front end design for a company named safety first.",
    info2: "",
    url: "https://secret-shelf-45623.herokuapp.com/",
    repo: "https://github.com/faisal6699/safety-first", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: smartbrain,
    title: "smartbrain",
    info:
      "It is a functional web application which can detect face of persons as well as a voice to text conversion API integrated. It has also a functional sign in and register form.",
    info2: "",
    url: "https://smart-brain-6699.herokuapp.com/",
    repo: "https://github.com/faisal6699/smart-brain-6699", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: chatbot,
    title: "chatbot",
    info:
      "DialogFlow is a google cloud's NLP system. Using this API I have ingregated a bot with can communicate with clients and can give then a feel that they are talking to humans.",
    info2: "",
    url: "https://chatbotdialogflowtesting.herokuapp.com/",
  },

  {
    id: nanoid(),
    img: robofrinds,
    title: "robofrinds",
    info:
      "It is a simple searching application. Where we can find a card with writting some keywords",
    info2: "",
    url: "https://robofriends6699.herokuapp.com/",
    repo: "https://github.com/faisal6699/robotfriends", // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: todolist,
    title: "todolist",
    info:
      "It is a simple application for keeping a track on work what we are doing in everyday life.",
    info2: "",
    url: "https://todolist6699.herokuapp.com/",
    repo: "https://github.com/faisal6699/Que-5", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  email: "faisal.ahmed6699@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "facebook",
      url: "https://www.facebook.com/faisalador",
    },

    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/faisal-ahmed-282037174/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/faisal6699",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
