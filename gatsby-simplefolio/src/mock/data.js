import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chandler Burket',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'React Task Tracker',
    info: 'A functional react js user interface used to keep track of tasks along with date and time. Taks can be added and removed along with reminders set with the data being saved with a json server backend',
    info2: '',
    url: '',
    repo: 'https://github.com/chandlerburket/react_task_tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'React Calculator',
    info: 'Responsive calculator with a react user interface capable of making standard calculations using math.js. The calculator allows positive and negative numbers as well as using exponential notation for large numbers unable to fit the screen. A hamburger menu in the top corner allows the user to see basic math formulas to aid in calculations.',
    info2: '',
    url: '',
    repo: 'https://github.com/chandlerburket/react-calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/chandlerburket',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chandler-burket-658653222/',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/chandlerburket',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
