// src/data/coursesData.js

import Course1 from '../assets/web-course.png';
import Course2 from '../assets/data-analysis.png';
import Course3 from '../assets/mobile-dev.png';
import Course4 from '../assets/data-science.png';

export const coursesData = [
  {
    slug: 'full-stack-web-development',

    title: 'FULL STACK WEB DEVELOPMENT',

    image: Course1,

    description:
      'Build complete web and mobile applications using frontend, backend, databases, and APIs.',

    duration: '24 Months',

    price: 4999,

    level: 'Beginner',

    language: 'English/Hindi',

    projects: '5+ Real World Projects',

    certificate: 'Yes',

    overview:
      'This Full Stack Web Development course is designed to help students master both frontend and backend technologies required to build complete modern web applications. Students will learn HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, APIs, authentication, deployment, and real-world project development. The course focuses heavily on practical implementation, industry-level coding standards, and project-based learning to make students job-ready full stack developers.',

    learn: [
      'HTML5 & Modern CSS3',
      'JavaScript ES6+ Fundamentals',
      'Responsive Web Design',
      'React.js Frontend Development',
      'Node.js & Express.js Backend',
      'REST API Development',
      'MongoDB Database Integration',
      'Authentication & Authorization',
      'Git & GitHub Version Control',
      'Real-World Full Stack Projects',
    ],

    tools: [
      { icon: 'html', name: 'HTML5' },
      { icon: 'css', name: 'CSS3' },
      { icon: 'js', name: 'JavaScript' },
      { icon: 'react', name: 'React' },
      { icon: 'java', name: 'Java' },
      { icon: 'mysql', name: 'MySQL' },
      { icon: 'mongodb', name: 'MongoDB' },
      { icon: 'github', name: 'GitHub' },
    ],
  },

  {
    slug: 'data-analysis',

    title: 'DATA ANALYSIS',

    image: Course2,

    description:
      'Learn data cleaning, visualization, reporting, and business intelligence skills.',

    duration: '12 Months',

    price: 4999,

    level: 'Beginner',

    language: 'English/Hindi',

    projects: '8+ Projects',

    certificate: 'Yes',

    overview:
      'This Data Analysis course helps students understand how to collect, clean, analyze, and visualize data for business decision-making. Students will learn Excel, SQL, Python, Power BI, dashboards, reporting, and data visualization techniques. The course includes hands-on datasets and real-world analysis projects that prepare students for roles such as Data Analyst and Business Analyst.',

    learn: [
      'Excel & Advanced Excel',
      'SQL & Database Queries',
      'Python for Analysis',
      'Power BI',
      'Data Cleaning',
      'Data Visualization',
      'Dashboard Building',
      'Business Reporting',
    ],

    tools: [
      { icon: 'python', name: 'Python' },
      { icon: 'powerbi', name: 'Power BI' },
      { icon: 'mysql', name: 'SQL' },
      { icon: 'pandas', name: 'Pandas' },
      { icon: 'numpy', name: 'NumPy' },
    ],
  },

  {
    slug: 'mobile-app-development',

    title: 'MOBILE APP DEVELOPMENT',

    image: Course3,

    description:
      'Build modern Android and iOS applications using Flutter and Firebase.',

    duration: '18 Months',

    price: 4999,

    level: 'Beginner',

    language: 'English/Hindi',

    projects: '6+ Projects',

    certificate: 'Yes',

    overview:
      'This Mobile App Development course teaches students how to build high-performance Android and iOS applications using Flutter and Firebase. Students will learn Dart programming, UI development, APIs, Firebase integration, authentication, state management, and app deployment. The training is project-based and focuses on creating responsive, scalable, and professional mobile applications.',

    learn: [
      'Flutter Fundamentals',
      'Dart Programming',
      'Firebase Integration',
      'REST APIs',
      'Authentication',
      'State Management',
      'Play Store Deployment',
    ],

    tools: [
      { icon: 'flutter', name: 'Flutter' },
      { icon: 'firebase', name: 'Firebase' },
      { icon: 'js', name: 'JavaScript' },
      { icon: 'github', name: 'GitHub' },
    ],
  },

  {
    slug: 'data-science',

    title: 'DATA SCIENCE',

    image: Course4,

    description:
      'Master machine learning, AI, statistics, and predictive modeling.',

    duration: '18 Months',

    price: 4999,

    level: 'Intermediate',

    language: 'English/Hindi',

    projects: '10+ Projects',

    certificate: 'Yes',

    overview:
      'This Data Science course is designed to provide strong foundations in machine learning, artificial intelligence, data analysis, and predictive modeling. Students will learn Python, statistics, data preprocessing, machine learning algorithms, deep learning basics, visualization, and model deployment. The course includes practical implementation using real-world datasets and industry-level projects.',

    learn: [
      'Python',
      'Statistics',
      'Machine Learning',
      'Deep Learning',
      'Data Visualization',
      'NLP Basics',
      'Model Deployment',
    ],

    tools: [
      { icon: 'python', name: 'Python' },
      { icon: 'tensorflow', name: 'TensorFlow' },
      { icon: 'pandas', name: 'Pandas' },
      { icon: 'numpy', name: 'NumPy' },
      { icon: 'sklearn', name: 'Scikit-learn' },
    ],
  },
];