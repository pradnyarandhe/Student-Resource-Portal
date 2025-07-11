// src/data/courseData.js
export const courseData = {
  cybersecurity: {
    title: "Cyber Security",
    description: "Learn how to protect systems and data from cyber threats.",
    modules: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
    title: "MySQL",
    description: "Master MySQL for database development.",
    modules: [
      {
        id: 1,
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
