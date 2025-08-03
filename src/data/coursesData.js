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
        content:
          "What is Cyber Security?\nCyber Security refers to the practice of protecting systems, networks, and data from digital attacks. These attacks are typically aimed at accessing, changing, or destroying sensitive information; extorting money; or disrupting business operations.\nCyber Security involves technologies, processes, and practices designed to defend against threats from both internal and external sources.",
        quiz: [
          {
            question: "1. What does Cyber Security primarily aim to protect?",
            options: ["Only mobile applications", "Systems, networks, and data","Social media accounts","Office equipment"],
            answer: "Systems, networks, and data",
          },
           {
            question: "2. Which of the following is NOT a common goal of a cyber attack?",
            options: ["Extorting money", "Improving software performance","Disrupting business operations","Accessing sensitive information"],
            answer: "Improving software performance",
          },
          {
            question: "3. Cyber Security uses technologies, processes, and __________ to protect against threats.",
            options: ["Firewalls", "Passwords","Practices","Biometrics"],
            answer: "Practices",
          },
        ],
      },
      {
        title: "Module 2: Importance of Cyber Security in the Digital Age",
        videoUrl: "/videos/cyber/threats.mp4",
        content:
          "In today’s digital world, we rely on technology for everything—banking, shopping, communication, healthcare, and more. This heavy reliance makes individuals, organizations, and even governments vulnerable to cyber attacks.\nKey reasons Cyber Security is essential:\n1. Data Protection: Prevents data breaches and protects personal and business data.\n2. Prevents Financial Loss: Cyber attacks can cause millions in damage.\n3. Safeguards Reputation: A breach can damage public trust.\n4. National Security: Governments must secure infrastructure from cyber warfare.\n5. Remote Work: Increases the need for secure remote access.",
        quiz: [
          {
            question: "1. Why is Cyber Security more important in today's world?",
            options: ["Because fewer people use the internet", "Because technology is becoming outdated","Because we rely on digital systems for essential services","Because physical crimes have decreased"],
            answer: "Because we rely on digital systems for essential services",
          },
          {
            question: "2. Which of the following is a key reason Cyber Security is essential?",
            options: ["To increase screen time", "To promote software development","To prevent data breaches","Because physical crimes have decreased","To speed up internet connections"],
            answer: "To prevent data breaches",
          },
        ],
      },
      {
        title: "Module 3: Types of Cyber Threats",
        videoUrl: "/videos/cyber/threats.mp4",
        content:
          "Here are some common cyber threats: \n\nMalware: Malicious software like viruses, worms, trojans./nPhishing: Fraudulent attempts to obtain sensitive information via fake emails or websites.\nRansomware: Locks/ encrypts your data and demands payment to unlock it.\nSpyware: Secretly monitors user activities. \nAdware: Displays unwanted ads, may also collect user info.\nDenial of Service(DoS / DDoS): Floods a network or website to make it unavailable.\nMan -in -the - Middle(MitM) Attacks: Intercepts communication between two parties.\nSQL Injection: Attacks databases through vulnerable input fields on websites.\nZero - Day Exploit: Exploits software vulnerabilities unknown to the vendor.",
        quiz: [
        {
          question: "1. What is Malware?",
          options: ["A technique for safe browsing", "A software update process","Malicious software like viruses, worms, and trojans","An encryption tool"],
          answer: "Malicious software like viruses, worms, and trojans",
        },
         {
          question: "2.  Phishing is best described as:",
          options: ["A type of network flooding", "Monitoring user activities secretly","A way to bypass firewalls","An attempt to obtain sensitive information using fake emails or websites"],
          answer: "An attempt to obtain sensitive information using fake emails or websites",
        },
      ],
      },
      {
  title: "Module 4: Cyber Security Best Practices",
    videoUrl: "/videos/cyber/bestpractices.mp4",
      content:
  "Best practices include:\n\n- Using strong passwords\n- Updating software regularly\n- Avoiding suspicious links and attachments\n- Enabling two-factor authentication",
    quiz: [
      {
        question: "Which of the following is a best practice?",
        options: ["Using simple, easy-to-remember passwords", "Ignoring software updates","Clicking on all email attachments","Enabling two-factor authentication"],
        answer: "Enabling two-factor authentication",
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
            title: "Module 1: What is MySQL?",
            videoUrl: "/videos/mysql/intro.mp4",
            content:
              "MySQL is an open-source Relational Database Management System (RDBMS) based on Structured Query Language (SQL). It is used to store, retrieve, manage, and manipulate data in a structured format.\nDeveloped by: MySQL AB (now owned by Oracle Corporation)\nCommonly used with: PHP, Java, Python, etc.\nPopular in: Web development, data storage, and backend systems\n \n Key Features of MySQL: \nOpen-source and free to use\nFast and reliable\nCross-platform compatibility (Windows, Linux, macOS)\nSupports large databases\nSecurity through access control and authentication\nIntegration with many programming languages",
            quiz: [
              {
                question: "1. What is MySQL?",
                options: ["A programming language", "A spreadsheet software","Relational Database Management System (RDBMS)","A graphic design tool"],
                answer: "Relational Database Management System (RDBMS)",
              },
                {
                question: "2. MySQL is based on which language?",
                options: ["Python", "Structured Query Language (SQL)","HTML","XML"],
                answer: "Structured Query Language (SQL)",
              },
            ],
          },
          {
            title: "Module 2: Basic MySQL Terminology",
            videoUrl: "/videos/mysql/intro.mp4",
            content:
              "Database – Collection of related data\nTable – Structure within a database to store data in rows and columns\nRow (Record) – Single entry in a table\nColumn (Field)– Attribute of data\nPrimary Key – Unique identifier for each row\nForeign Key – A key that links one table to another\n",
            quiz: [
              {
                question: "1. What is a Database in MySQL?",
                options: ["A single entry of data", "A file containing images",
                  "A collection of related data","A type of programming languag"],
                answer: "A collection of related data",
              },
              {
                question: "2. Which of the following best defines a Table?",
                options: ["A single entry of data", "A file containing images",
                  "A collection of related data","A type of programming languag"],
                answer: "A collection of related data",
              },
            ],
          },
          {
            title: "Module 3: MySQL Commands",
            videoUrl: "/videos/mysql/intro.mp4",
            content:
              "SQL Basics in MySQL\n\n Creating a Database\nCREATE DATABASE college;\n\nCreating a Table\nCREATE TABLE students (\n  id INT PRIMARY KEY,\nname VARCHAR(50),\nage INT,\ndepartment VARCHAR(30)\n);\n\nInserting Data\nINSERT INTO students (id, name, age, department)\nVALUES (1, 'Alice', 20, 'Computer Science');\n\nRetrieving Data\nSELECT * FROM students;\nSELECT name, department FROM students WHERE age > 18;\n\nUpdating Data\nUPDATE students SET age = 21 WHERE id = 1;\n\nDeleting Data\nDELETE FROM students WHERE id = 1;\n",
            quiz: [
              {
                question: " Which command is used to update the age of a student?",
                options: ["CHANGE age TO 21", "MODIFY age = 21","UPDATE students SET age = 21 WHERE id = 1;","ALTER TABLE students"],
                answer: "UPDATE students SET age = 21 WHERE id = 1;",
              },
            ],
          },
           {
            title: "Module 4: Constraints",
            videoUrl: "/videos/mysql/intro.mp4",
            content:
              "Constraints\n\nPRIMARY KEY – Uniquely identifies each record\nFOREIGN KEY – Ensures referential integrity\nNOT NULL – Prevents null values\nUNIQUE – No duplicate values allowed\nDEFAULT – Sets a default value\n",
            quiz: [
              {
                question: "What is the purpose of a PRIMARY KEY?",
                options: ["To allow duplicate values", "To link multiple tables","To uniquely identify each record in a table","To hide sensitive data"],
                answer: "To uniquely identify each record in a table",
              },
            ],
          },
          {
            title: "Module 5: Aggregrate Functions",
            videoUrl: "/videos/mysql/intro.mp4",
            content:
              "COUNT() – Returns the number of rows that match a specified condition\nSUM() – Returns the total sum of a numeric column\nAVG() – Returns the average value of a numeric column\nMIN() – Returns the smallest value in a column\nMAX() – Returns the largest value in a column\n\nExample Queries:\nSELECT COUNT(*) FROM students;\nSELECT AVG(age) FROM students;\n",
            quiz: [
              {
                question: "Which function is used to count the number of rows returned by a query?",
                options: ["SUM()", "COUNT()","AVG()","MIN()"],
                answer: "COUNT()",
              },
            ],
          },
        ],
  },
};
