// src/data/courseData.js
export const courseData = {
  cybersecurity: {
    id: 1, 
    title: "Cyber Security",
    description: "Learn how to protect systems and data from cyber threats.",
    modules: [
      {
       
        title: "Module 1: Introduction to Cyber Security",
        videoUrl: "/videos/cyber/intro.mp4",
        content: "Cyber security refers to protecting systems and networks...",
        quiz: [
          {
            question: "What is cyber security?",
            options: ["A firewall", "A set of practices to secure data"],
            answer: "A set of practices to secure data",
          },
        ],
      },
      {
        title: "Module 2: Types of Cyber Threats",
        videoUrl: "/videos/cyber/threats.mp4",
        content: "Cyber threats include phishing, ransomware, and malware...",
        quiz: [
          {
            question: "Which is a type of cyber attack?",
            options: ["Phishing", "Washing"],
            answer: "Phishing",
          },
        ],
      },
      {
      
        title: "Module 3: Types of Cyber Threats",
        videoUrl: "/videos/cyber/threats.mp4",
        content: "Cyber threats include phishing, ransomware, and malware...",
        quiz: [
          {
            question: "Which is a type of cyber attack?",
            options: ["Phishing", "Washing"],
            answer: "Phishing",
          },
        ],
      },
    ],
  },
  mysql: {
    id: 2, 
    title: "MySQL",
    description: "Master MySQL for database development.",
    modules: [
      {
        
        title: "Basics of MySQL",
        videoUrl: "/videos/mysql/intro.mp4",
        content: "MySQL is an open-source database...",
        quiz: [
          {
            question: "What is a primary key?",
            options: ["Option A", "Option B"],
            answer: "Option B",
          },
        ],
      },
    ],
  },
};
