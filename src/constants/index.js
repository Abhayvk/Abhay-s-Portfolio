import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import certification1 from "../assets/certifications/certification-1.png";
import certification2 from "../assets/certifications/certification-2.png";
import certification3 from "../assets/certifications/certification-3.png";
import certification4 from "../assets/certifications/certification-4.png";



export const HOME_CONTENT = `A driven student with strong academic Foundation and a keen enthusiasm for continuous learning. Actively engaged as a student peer mentor, I am eager to leverage theoretical knowledge into practical experience and make meaningful contributions to the IT industry. Passionate about tackling complex problems and exploring new technologies, I am committed to applying my skills in real-world settings and driving innovation.`;
export const ABOUT_TEXT = `I am a final-year B.Tech student at KL University, from the department of Computer Science and Engineering(Honors) specializing in Cloud and Edge Computing. With a current GPA of 9.35, I have honed my skills in Java, mastering object-oriented principles and design patterns. My certifications in Full Stack Web Development, Machine Learning, and UX-Design reflect my commitment to staying at the forefront of technology. As a student peer mentor, I have guided my peers, fostering a collaborative learning environment. My career objective is to leverage my technical expertise and problem-solving abilities in a software developer role, where I can contribute to innovative projects and continue to grow professionally.`;

export const CERTIFICATIONS = [
    {
      title: "Aviatrix Certified Multi-Cloud Networks Associate",
      link:"https://www.credly.com/earner/earned/badge/2b3f0884-7b7c-4517-9d68-b6d27914118c",
      image: certification1,
      description:"The Aviatrix certification validates foundational knowledge of cloud services, including core AWS and Google services, security, and compliance. It is designed for individuals who are new to the cloud and want to build a strong foundation for further Cloud certifications.",
      technologies: ["AWS Core Services","Cloud Security","Billing and Pricing Models","Global Cloud Infrastructure"],
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      link:"https://www.credly.com/earner/earned/badge/65df174c-5750-454c-a006-8a0924bc706c",
      image: certification2,
      description:"The Red Hat Certified Enterprise Application Developer (RHCED) certification demonstrates proficiency in designing, developing, and deploying enterprise-ready applications using Red Hat technologies. It covers topics such as API management, persistence with JPA, CDI, and REST services.",
        technologies: ["Red Hat Enterprise Linux", "Java EE", "Hibernate/JPA", "RESTful Services"],
      },
    {
      title: "Oracle Certified Associate",
      link:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=82B874073CE5A40800D26527BC4164EE8C7B2F321355938AB010A4ACEE945A16",
      image: certification3,
      description:"The Oracle Certified Associate (OCA) certification provides foundational knowledge of Oracle database management. It covers SQL fundamentals, data modeling, and essential database administration tasks. This certification is a stepping stone for more advanced Oracle certifications.",
            technologies: ["Oracle Database", "SQL", "Data Modeling"],
    },
  
    {
      title: "Google Cloud Skills",
      link:"https://www.cloudskillsboost.google/public_profiles/740b6cad-d93d-4519-b838-5cdadbe8b1d1",
      image: certification4,
      description:"The Google Cloud Skills certification showcases your ability to work with Google Cloud Platform (GCP) services. It covers cloud infrastructure, security, data management, and machine learning models on GCP. This certification is designed for those seeking to enhance their cloud expertise with Google’s cloud services.",
            technologies: ["Google Cloud Platform (GCP)", "Compute Engine", "Cloud Storage","Google Kubernetes Engine"],
    },
  ];
  
  

export const PROJECTS = [
  {
    title: "Pawn Broker & Mortgaging Web App",
    link:"https://github.com/Abhayvk/mortgaging_systems",
    image: project1,
    description:
      "Developed a comprehensive web application for managing pawn brokering and mortgage processes using Django Framework for robust backend functionality, integrated MySQL for efficient data management, and used HTML, CSS, and Python to create a responsive and user-friendly interface. The system includes transaction handling and customer management enhancing user experience.",
    technologies: ["HTML", "CSS", "Python", "Django", "MySQL"],
  },
  {
    title: "College ERP",
    link:"https://github.com/Abhayvk",
    image: project2,
    description:
      "Proficient in developing an Attendance System with MongoDB for streamlined data management. Skilled in creating user-friendly interfaces using React.js and Node.js for seamless faculty attendance tracking. Experienced in integrating feedback features to facilitate student insights and enhance course effectiveness",
      technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB" , "ExpressJS"],
    },
  {
    title: "Library Management Application",
    link:"https://github.com/Abhayvk",
    image: project3,
    description:
      " Engineered a full-stack library management system using Java, implementing a microservices architecture for scalability. Designed and developed front-end and back-end components, ensuring seamless interaction between services. The system facilitated efficient book cataloging, user management, and transaction processing, offering a responsive UI and robust performance.",
    technologies: ["Java Full-Stack", "SpringBoot", "Hibernate", "Microservices"],
  },

  {
    title: "Portfolio",
    link:"/",
    image: project4,
    description:"Designed and developed a personal portfolio to showcase my skills, projects, and certifications. This portfolio serves as a comprehensive introduction to my professional background and abilities as a full stack developer. The site features a clean, modern design with sections for my resume, contact information, and detailed descriptions of my key projects.",
        technologies: ["HTML", "CSS", "TailWind","Framer Motion"],
  },
];


  export const CONTACT = {
    phoneNo: "+91 9381711263",
    email: "abhayvk42@gmail.com",
  };



