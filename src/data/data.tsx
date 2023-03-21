import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/CODEBG.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import BISU from '../images/BISU.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Benjie Estal.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an <strong className="text-stone-100">IT Technician / Software Engineer</strong>, currently working
        a well-rounded <strong className="text-stone-100">IT related tasks</strong> helping build a modernize system for campus.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can connect with me through <strong className="text-stone-100">Facebook</strong>,
        or <strong className="text-stone-100">Instagram</strong>, You can chat or talk to me if you want someone to listen to, either personal or work related I would love to.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: BISU,
  description: `Welcome to my website! I'm a software engineer with a passion for building high-quality, 
  user-friendly software. I'm always eager to learn new technologies and techniques. I pride myself on my ability to adapt quickly to new challenges and 
  environments. When I'm not coding, I enjoy playing various sports and engaging with people. Let's work together to create something amazing!`,
  aboutItems: [
    { label: 'Location', text: 'Bohol, PH', Icon: MapIcon },
    { label: 'Age', text: '23', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Filipino', Icon: FlagIcon },
    { label: 'Interests', text: 'Anime, Track & Field Events, Singing, Games', Icon: SparklesIcon },
    { label: 'Study', text: 'Bohol Island State University-Bilar Campus', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Bohol Island State University-Bilar Campus.', Icon: OfficeBuildingIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Tagalog',
        level: 8,
      },
      {
        name: 'Bisaya',
        level: 10,
      },
    ],
  },
  {
    name: 'Desktop development',
    skills: [
      {
        name: 'C#',
        level: 7,
      },
      {
        name: 'VB.NET',
        level: 7,
      },
      {
        name: 'DEVEXPRESS.CS',
        level: 7,
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'HTML, CSS',
        level: 8,
      },
      {
        name: 'WordPress',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Php',
        level: 6,
      }
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 7,
      },
    ],
  },
  {
    name: 'Game development',
    skills: [
      {
        name: 'Scratch',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'FighVac',
    description: 'It is a survival game, a concept of Covid-19 which relates to zombie shooting game',
    url: 'https://fightvac.benjieestal.repl.co/',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Nutrition Management System',
    description: 'A unified system for the employees of the local government units of Bohol, including Health Monitoring System, Health Analyzer System for children.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Alburquerque Website',
    description: 'My hometown website which I made during my college studies',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'BISU-Bilar Contact Tracing System',
    description: 'A production system which is use in the campus for contact tracing using QR Code Scanning.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'BagHub',
    description: 'An online shopping mobile application for Different Bag Accessories.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Bohol Cacao Industry Information System',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Massage Reservation System',
    description: 'A reservation system which I made during my college studies',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2022',
    location: 'Zamora, Bilar, Bohol, Philippines',
    title: 'Bachelor of Science in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2018 - 2022',
    location: 'Bachelor of Science in Computer Science',
    title: 'What did you learn of the course?',
    content: <p>As a computer science student, I gained hands-on experience in various programming languages and technologies,
      including Java, C, C++ HTML, CSS, Php etc.. I also collaborated with classmates on a variety
      of projects, including Web Development and Desktop Development. Through these experiences, I developed
      a strong foundation in software development principles and learned how to apply them to real-world problems. I'm excited to
      continue building on this foundation as I begin my career in the field.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2022 - Present',
    location: 'Bohol Island State University- Bilar Campus',
    title: 'IT Technician/ Software Engineer',
    content: (
      <p>
        Analyze, plan, develop, create, implement, review, and monitor campus software projects and other IT related tasks.
      </p>
    ),
  },
  {
    date: 'August - September 2021',
    location: 'BlendIT Tech Company',
    title: 'Junior Flutter Developer (OJT)',
    content: (
      <p>
        Experience On Job Training in an Industry-based environment and Develop a Mobile application using Flutter Framework, Dart languange
        and Firebase for Database.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Max Angelo D. Perin',
      text: 'Sir Benjie is my Junior Software Engineer in Management Information System Unit, BISU- Bilar Campus, He is focused on what his doing, he can cope fast with learning new tools and technologies, especially in Software Development. For sure he will be a great asset to the company.',
      image: 'https://i.postimg.cc/HsmyjPRW/perin.jpg',
    },
    {
      name: 'Darrel A. Cardaña',
      text: 'Benjie has shown exceptional skills and talent in programming throughout our course. His dedication and hard work have consistently resulted in high-quality code and successful projects. It has been a pleasure to have him as a student, and I am confident that he will continue to excel in his programming career.',
      image: 'https://i.postimg.cc/jq1J4SD5/darrel.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach me out and connect through the following: ',
  items: [
    {
      type: ContactType.Email,
      text: 'benjieestal9@gmail.com',
      href: 'mailto:benjieestal9@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Alburquerque Bohol, Philippines',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@benjieestal',
      href: 'https://www.instagram.com/benjieestal?igshid=ZDdkNTZiNTM=/',
    },
    {
      type: ContactType.Github,
      text: 'benjieestal7',
      href: 'https://github.com/benjieestal7',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/benjieestal7' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/benjie-estal-617b95244?original_referer=' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/benjieestal?igshid=ZDdkNTZiNTM=/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
