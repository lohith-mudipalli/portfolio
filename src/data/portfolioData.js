import { ShieldCheck, Database, BrainCircuit, Layers } from 'lucide-react'

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL', 'C', 'C++'],
  },
  {
    title: 'Backend Engineering',
    items: [
      'Spring Boot',
      'Node.js (Express)',
      'RESTful API Design',
      'Microservices Architecture',
      'JWT Authentication',
      'RBAC',
      'Concurrency Handling',
      'Transaction Management',
      'Asynchronous Processing',
    ],
  },
  {
    title: 'Frontend Technologies',
    items: ['React.js', 'HTML5', 'CSS3', 'Responsive Web Design'],
  },
  {
    title: 'Databases & Data Management',
    items: ['MySQL', 'PostgreSQL', 'Relational Database Design', 'Query Optimization', 'Indexing', 'Data Modeling'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'Docker Compose', 'Git', 'GitHub Actions (CI/CD)', 'Postman', 'Railway', 'Linux/Unix'],
  },
  {
    title: 'Testing & Quality Assurance',
    items: ['JUnit', 'H2 Database', 'Jest', 'Supertest', 'Integration Testing', 'API Testing'],
  },
  {
    title: 'AI / Machine Learning',
    items: ['LangChain', 'OpenAI API', 'ChromaDB', 'RAG', 'Embeddings', 'Semantic Search'],
  },
  {
    title: 'Core Computer Science',
    items: [
        'Data Structures & Algorithms', 
        'Object-Oriented Programming', 
        'System Design', 
        'Operating Systems', 
        'Computer Networks', 
        'Software Engineering'
    ],
  },
]

export const projects = [
  {
    name: 'DocBook',
    subtitle: 'Secure Medical Appointment Platform',
    icon: ShieldCheck,
    summary:
      'A full-stack healthcare appointment platform built with Spring Boot and React, designed around secure role-based workflows, dynamic scheduling, and production-style backend architecture.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'React', 'MySQL', 'Docker Compose', 'GitHub Actions'],
    highlights: [
      'Implemented JWT-based authentication and authorization with Spring Security for patient, doctor, and admin workflows.',
      'Built RESTful APIs for appointment booking, doctor availability, and timeslot generation.',
      'Engineered conflict-free booking using transactional logic and row-level locking to prevent double-booking.',
      'Developed asynchronous email notifications with retry logic and integrated audit logging for traceability.',
    ],
    github: 'https://github.com/lohith-mudipalli/docbook',
    live: null,
  },
  {
    name: 'ProFin',
    subtitle: 'Finance Tracking Application',
    icon: Database,
    summary:
      'A full-stack finance management system that enables secure transaction tracking, filtered data retrieval, monthly summaries, CSV export, and responsive dashboard workflows.',
    stack: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Docker Compose', 'Jest', 'Supertest'],
    highlights: [
      'Designed RESTful APIs for create, update, delete, and filtered transaction retrieval operations.',
      'Built JWT-based authentication to protect user-specific financial data.',
      'Developed dynamic filtering, search, and real-time monthly summary calculations.',
      'Enabled CSV export and improved UX with loading states, confirmations, and notifications.',
    ],
    github: 'https://github.com/lohith-mudipalli/finance-tracker',
    live: null,
  },
  {
    name: 'DocuChat AI',
    subtitle: 'AI-Powered Document Q&A System (RAG)',
    icon: BrainCircuit,
    summary:
      'An AI-powered document assistant that processes uploaded PDFs, performs semantic retrieval with vector search, and generates context-aware answers using a Retrieval-Augmented Generation pipeline.',
    stack: ['Python', 'Streamlit', 'LangChain', 'OpenAI API', 'ChromaDB', 'PyPDF'],
    highlights: [
      'Built PDF ingestion and multi-page text extraction pipeline for document processing.',
      'Implemented chunking with RecursiveCharacterTextSplitter to improve retrieval quality.',
      'Generated embeddings and stored them in ChromaDB for similarity-based semantic search.',
      'Engineered context-aware prompting with citation-supported responses and robust error handling.',
    ],
    github: 'https://github.com/lohith-mudipalli/Docuchat-AI',
    live: 'https://docuchat-ai-agffgzsmwogs7tvhpbbkis.streamlit.app',
  },
  {
    name: 'Capstone Hub',
    subtitle: 'Capstone Project Management Platform (Backend Engineer)',
    icon: Layers,
    summary:
      'A backend-driven capstone management platform supporting project submission, preference ranking, group allocation, and evaluation workflows for students, instructors, and clients.',
    stack: ['Node.js', 'Express', 'MySQL', 'Firebase Auth', 'JWT', 'Railway'],
    highlights: [
      'Designed backend services and RESTful APIs for project submission, ranking, group assignment, and evaluation management.',
      'Implemented automated group formation using weighted preference scoring.',
      'Built RBAC using Firebase Authentication and JWT for secure multi-role access.',
      'Structured controllers, routes, and middleware for scalability and maintainability.',
    ],
    github: 'https://github.com/sricharan0912/A-Portal-for-Managing-Students-Capstone-Projects-',
    live: null,
  },
];
