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
  resume: 'https://chandler-docs-in.s3.us-east-2.amazonaws.com/Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'React Task Tracker',
    info: 'A functional ReactJS user interface used to keep track of tasks along with date and time. Tasks can be added and removed along with setting reminders with the data being saved with a JSON server backend',
    info2: '',
    url: '',
    repo: 'https://github.com/chandlerburket/react_task_tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'React Calculator',
    info: 'Responsive calculator with a React user interface capable of making standard calculations using math.js. The calculator allows positive and negative numbers as well as using exponential notation for large numbers unable to fit the screen. A hamburger menu in the top corner allows the user to see basic math formulas to aid in calculations.',
    info2: '',
    url: '',
    repo: 'https://github.com/chandlerburket/react-calculator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Beehive Honeypot',
    info: 'A Dockerized Wordpress honeypot that can be used to collect information and discourage malicious Wordpress attacks. The honeypot site uses the Alpine Linux ditribution, with an Apache server, and a SQLite database. The site is written in Python and allows the user to add in any Wordpress plugins that they require.',
    info2: '',
    url: '',
    repo: 'https://github.com/chandlerburket/Beehive', // if no repo, the button will not show up
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
